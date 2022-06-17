import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

const Home: NextPage = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	const registerMutation = trpc.useMutation(["auth/register"]);

	const handleSubmit = () => {
		registerMutation.mutate({
			fullname,
			email,
			password,
		});

		if (registerMutation.isSuccess) {
			router.push("/generate/pvc");
		}
	};

	return (
		<>
			<div className="flex justify-center w-[80%] mx-auto place-items-center ">
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
							<div className="bg-red text-white px-4 py-4">
								{registerMutation.error?.message}
							</div>
						)}
						<form>
							<div className=" py-5 px-4">
								<div className="flex flex-col">
									<label htmlFor="fullname">Fullname</label>
									<input
										value={fullname}
										onChange={(e) => setFullname(e.currentTarget.value)}
										placeholder="eg. John Doe"
										className="rounded-md placeholder:text-gray-400 px-2 py-2 border-gray-600 block"
										type="text"
										id="fullname"
										name="fullname"
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="email">email</label>
									<input
										value={email}
										onChange={(e) => setEmail(e.currentTarget.value)}
										placeholder="eg. johndoe@example.com"
										className="rounded-md  placeholder:text-gray-400 px-2 py-2 border-gray-600 block "
										type="email"
										id="email"
										name="email"
									/>
								</div>
								<div className="flex flex-col mt-1">
									<label htmlFor="password">password</label>
									<input
										onChange={(e) => setPassword(e.currentTarget.value)}
										placeholder="password"
										className="rounded-md placeholder:text-gray-400 px-2 py-2 border-gray-600 block"
										type="password"
										id="password"
										name="password"
									/>
								</div>
								<div className="mt-5 float-right">
									<button
										onClick={handleSubmit}
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
