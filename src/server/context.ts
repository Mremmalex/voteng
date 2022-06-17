import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import type { NextApiResponse, NextApiRequest } from "next";

interface CreateContextOptions {
	// session: Session | null
	req: NextApiRequest;
	res: NextApiResponse;
}

export async function createContextInner(_opts: CreateContextOptions) {
	return {
		res: _opts.res,
		req: _opts.req,
	};
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

export async function createContext({
	res,
	req,
}: trpcNext.CreateNextContextOptions): Promise<Context> {
	return await createContextInner({
		req,
		res,
	});
}
