import superjson from "superjson";
import * as trpc from "@trpc/server";
import { Context } from "./context";
import { ZodError } from "zod";

/**
 * Helper function to create a router with context
 */
export function createRouter() {
	return trpc
		.router<Context>()
		.formatError(({ shape, error }) => {
			return {
				...shape,
				data: {
					...shape.data,
					ZodError:
						error.code === "BAD_REQUEST" && error.cause instanceof ZodError
							? error.cause.flatten()
							: null,
				},
			};
		})
		.transformer(superjson);
}
