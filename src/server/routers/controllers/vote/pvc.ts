import { createRouter } from "@/server/createRouter";
import { string, z } from "zod";
import nanoid from "nanoid";
import { Prisma } from "@prisma/client";
import { prisma } from "@/server/prisma";
import { TRPCError } from "@trpc/server";

const pvcNumber = nanoid.customAlphabet(
	"1234567890AFBCDEFGHIJKLMNOPQRSTUVWXYZ",
	10
);

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

export const generatePvc = createRouter().query("pvc", {
	input: z.object({
		email: z.string().email(),
	}),
	async resolve({ input }) {
		const user = prisma.user.findUnique({
			where: {
				email: input.email,
			},
			select: defaultUserSelect,
		});

		if (!user) {
			throw new TRPCError({
				code: "BAD_REQUEST",
				message: "user not found",
			});
		}
		const pvcdata = await prisma.user.update({
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
			email: pvcdata.email,
			pvc: pvcdata.pvc,
		};
	},
});
