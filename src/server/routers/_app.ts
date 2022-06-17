import { createRouter } from "../createRouter";
import { authRouter } from "./controllers/user/auth";
import { generatePvc } from "./controllers/vote/pvc";


export const appRouter = createRouter()
	.merge("auth/", authRouter)
	.merge("pvc", generatePvc);

export type AppRouter = typeof appRouter;
