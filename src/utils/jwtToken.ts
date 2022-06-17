import jwt from "jsonwebtoken";

type User = {
	id: number;
	fullname: string;
	email: string;
};

const signJwtToken = (user: User) => {
	const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
		expiresIn: "3d",
	});

	const refreshToken = jwt.sign({ user }, process.env.JWT_SECRET as string, {
		expiresIn: "7d",
	});
	return { token, refreshToken };
};

const verifyJwtToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_SECRET as string);
};

export { signJwtToken, verifyJwtToken };
