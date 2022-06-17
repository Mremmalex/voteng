import { createContext } from "@/server/context";
import { appRouter } from "@/server/routers/_app";
import * as trpcNext from "@trpc/server/adapters/next";

export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext,
	onError({ error }) {
		if (error.code === "INTERNAL_SERVER_ERROR") {
			console.error("something went wrong", error);
		}
	},
	batching: {
		enabled: true,
	},
});
// Create procedure at path 'hello'
