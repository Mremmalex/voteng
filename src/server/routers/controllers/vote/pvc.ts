import { createRouter } from "@/server/createRouter";
import { string, z } from "zod";
import { customAlphabet } from "nanoid";
import { Prisma } from "@prisma/client";
import { prisma } from "@/server/prisma";
import { TRPCError } from "@trpc/server";
import argon2 from "argon2";

const pvcNumber = customAlphabet("1234567890AFBCDEFGHIJKLMNOPQRSTUVWXYZ", 10);

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

export const generatePvc = createRouter().mutation("generate", {
	input: z.object({
		email: z.string().email(),
		password: z.string().min(8).max(64),
	}),
	async resolve({ input }) {
		const user = await prisma.user.findUnique({
			where: {
				email: input.email,
			},
			select: defaultUserSelect,
		});

		if (!user) {
			throw new TRPCError({
				code: "BAD_REQUEST",
				message: "user with email does not exist",
			});
		}
		const isValid = await argon2.verify(user.password, input.password);
		if (!isValid) {
			throw new TRPCError({
				code: "BAD_REQUEST",
				message: "invalid password",
			});
		}
		await prisma.user.update({
			where: {
				email: input.email,
			},
			data: {
				pvc: pvcNumber(),
			},
			select: defaultUserSelect,
		});

		return {
			message: "pvc generated",
		};
	},
});
