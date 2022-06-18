import { createRouter } from "../../../createRouter";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/server/prisma";
import { TRPCError } from "@trpc/server";
import argon2 from "argon2";
import { resolve } from "path";
import { signJwtToken } from "@/utils/jwtToken";
import { TRUE } from "sass";

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
			fullname: z.string(),
			email: z
				.string({ required_error: "email is required" })
				.email("Email must be a valid email address"),
			password: z
				.string({ required_error: "password word must be provided" })
				.min(6, "min password length 6")
				.max(20, "max password length 20"),
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
					pvc: "",
					email: input.email,
					password: hashedPw,
				},
				select: defaultUserSelect,
			});

			return {
				message: "user created",
				status: "success",
				statusCode: 200,
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
