import Image from "next/image";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";

interface IFormInputs {
	fullname: string;
	email: string;
	password: string;
}

const schema = z.object({
	fullname: z
		.string({ required_error: "fullname is required" })
		.min(3, "fullname is required"),
	email: z
		.string({ required_error: "Email is required" })
		.email("invalid email"),
	password: z
		.string({ required_error: "password can not be empty" })
		.min(8, "password must be at least 8 character "),
});

const Home: NextPage = () => {
	const router = useRouter();

	const registerMutation = trpc.useMutation(["auth.register"]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInputs>({
		resolver: zodResolver(schema),
	});

	const registerHandler = async (data: IFormInputs) => {
		registerMutation.mutate({
			fullname: data.fullname,
			email: data.email,
			password: data.password,
		});
		reset();
	};
	if (registerMutation.isSuccess) {
		router.push("/generate_pvc");
	}
	return (
		<>
			<div className=" flex justify-center w-[80%] mx-auto place-items-center ">
				<div className="flex flex-col-reverse md:flex-row w-[25em] md:w-[50em] md:h-[30em] rounded-md shadow bg-green-700 mt-20 ">
					<div className="flex-1 w-full h-full rounded-tl-md pt-4 md:pt-0 ">
						<Image
							className="rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
							src="/assets/votersbg.jpg"
							alt="vote"
							width={390}
							height={450}
						/>
					</div>
					<div className=" w-full md:w-[22em]">
						<h3 className="text-center text-white font-bold pt-3">register</h3>
						{registerMutation.error && (
							<div className=" text-red-600 px-4 py-4">
								{registerMutation.error.message}
							</div>
						)}
						<form onSubmit={handleSubmit(registerHandler)}>
							<div className=" py-5 px-4">
								<div className="flex flex-col">
									<label htmlFor="fullname">Fullname</label>
									<input
										{...register("fullname")}
										placeholder="eg. John Doe"
										className="rounded-md placeholder:text-gray-400 px-2 py-2 border-gray-600 block"
										// type="text"
										id="fullname"
										name="fullname"
									/>
									<span className="text-red-900 ">
										{errors.fullname?.message}
									</span>
								</div>
								<div className="flex flex-col mt-1">
									<label htmlFor="email">email</label>
									<input
										{...register("email")}
										placeholder="eg. johndoe@example.com"
										className="rounded-md placeholder:text-gray-400 px-2 py-2 border-gray-600 block "
										// type="email"
										id="email"
										name="email"
									/>
									<span className="text-red-900 ">{errors.email?.message}</span>
								</div>
								<div className="flex flex-col mt-1">
									<label htmlFor="password">password</label>
									<input
										{...register("password")}
										placeholder="password"
										className="rounded-md placeholder:text-gray-400 px-2 py-2 border-gray-600 block"
										type="password"
										id="password"
										name="password"
									/>
									<span className="text-red-900">
										{errors.password?.message}
									</span>
								</div>
								<div className="mt-5 float-right">
									<button
										type="submit"
										className="bg-green-900 text-white rounded-md block px-10 py-3 hover:font-bold transition-all duration-300">
										{registerMutation.isLoading ? "processing...." : "register"}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
