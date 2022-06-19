import { createRouter } from "../../../createRouter";
import { z, ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/server/prisma";
import { TRPCError } from "@trpc/server";
import argon2 from "argon2";
import { customAlphabet } from "nanoid";
import { signJwtToken } from "@/utils/jwtToken";

const tempPvc = customAlphabet("33DDnnnddkd33499897", 10);

const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
	id: true,
	fullname: true,
	email: true,
	pvc: true,
	role: true,
	password: true,
	createdAt: true,
	updatedAt: true,
});

export const authRouter = createRouter()
	.mutation("register", {
		input: z.object({
			pvc: z.string().optional(),
			email: z.string().email(),
			fullname: z.string(),
			password: z.string(),
		}),
		async resolve({ input }) {
			const userDoesExist = await prisma.user.findUnique({
				where: { email: input.email },
			});
			if (userDoesExist) {
				throw new TRPCError({
					code: "NOT_FOUND",
					message: "user with Detail exits please check your email",
				});
			}
			const hashedPw = await argon2.hash(input.password);
			const user = await prisma.user.create({
				data: {
					fullname: input.fullname,
					pvc: tempPvc(),
					email: input.email,
					password: hashedPw,
				},
				select: defaultUserSelect,
			});

			return {
				message: "user created",
				status: "success",
				statusCode: 200,
				user: {
					id: user.id,
					fullname: user.fullname,
					email: user.email,
				},
			};
		},
	})
	.mutation("login", {
		input: z.object({
			pvc: z.string(),
			password: z.string(),
		}),
		async resolve({ ctx, input }) {
			const user = await prisma.user.findUnique({
				where: { pvc: input.pvc },
			});
			// check if user exists
			if (!user) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: "user with details does not exist",
				});
			}
			// compare password
			const isValid = await argon2.verify(user.password, input.password);
			if (!isValid) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: "Incorrect Passowrd",
				});
			}
			const userData = {
				id: user.id,
				fullname: user.fullname,
				email: user.email,
			};
			// create token
			const { token, refreshToken } = signJwtToken(userData);

			ctx.res.setHeader("Set-Cookie", refreshToken);
			return {
				message: "login successful",
				token,
				refreshToken,
			};
		},
	});
