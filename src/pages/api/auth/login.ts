import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST":
			return res.status(200).json(req.body);
		case "GET":
			return res.json({ message: "this is coming fom next" });
	}
}
