import Center from "@/components/shared/Center";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface InputFormProps {
	pvcnumer: string;
	password: string;
}

const schema = z.object({
	pvcnumer: z
		.string({ required_error: "please provide Your PVC number" })
		.min(3, "PVC number is required"),
	password: z
		.string({ required_error: "please provide Your password" })
		.min(8, "password must be at least 8 character"),
});

export default function Login() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<InputFormProps>({
		resolver: zodResolver(schema),
	});

	return (
		<Center>
			<div className="bg-green-700 h-[30em] flex justify-around place-items-center rounded-md">
				<div className="w-[22em] px-4">
					<h1 className="text-white font-extrabold text-4xl">Welcome Back</h1>
				</div>
				<div className="w-[22em] px-4">
					<h1 className="text-white text-4xl text-center">Login</h1>
					<form>
						<div className="flex flex-col">
							<label htmlFor="PVC number">PVC number</label>
							<input
								{...register("pvcnumer")}
								placeholder="eg. NG34534G453"
								type="text"
								className="rounded-md py-1 px-2"
								name="pvcnumber"
							/>
						</div>
						<div className="flex flex-col mt-1">
							<label htmlFor="PVC number">email</label>
							<input
								{...register("password")}
								placeholder="password"
								type="password"
								name="password"
								className="rounded-md py-1 px-2"
							/>
						</div>
						<div className="pt-4 float-right">
							<button
								type="submit"
								className="block px-10 py-2 rounded-md bg-green-900 text-white hover:bg-green-800 hover:font-bold transition-colors duration-300">
								login
							</button>
						</div>
					</form>
				</div>
			</div>
		</Center>
	);
}
