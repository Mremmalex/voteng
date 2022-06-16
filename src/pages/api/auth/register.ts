// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
	age?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { name } = req.body as Data;
		res
			.status(200)
			.json({ message: " hello dear from post route", data: { name } });
	} else {
		res.status(200).json({ message: " hello dear" });
	}
}
