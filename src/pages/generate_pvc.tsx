import Center from "@/components/shared/Center";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";

function Pvc() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const loginMutation = trpc.useMutation(["pvc.generate"]);

	const loginHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginMutation.mutate({
			email,
			password,
		});
	};
	if (loginMutation.isSuccess) {
		router.push("/auth/user");
	}
	return (
		<Center>
			<div className="flex justify-around place-items-center  bg-green-700 h-[30em] rounded-md  ">
				<div className=" w-[20em] px-4">
					<h1 className="text-white font-extrabold text-[3em] text-center">
						Your Vote Counts
					</h1>
				</div>
				<div className="w-[22em] px-4">
					<h1 className="text-center text-white font-bold pt-4">
						Generate Your PVC
					</h1>
					<div>
						{loginMutation.error?.data?.ZodError ? (
							<span>{loginMutation.error?.data?.ZodError.formErrors}</span>
						) : (
							<span className="text-red-800">
								{loginMutation.error?.message}
							</span>
						)}
					</div>
					<form onSubmit={loginHandler}>
						<div className="flex flex-col">
							<label htmlFor="email">email</label>
							<input
								value={email}
								onChange={(e) => setEmail(e.currentTarget.value)}
								className="rounded-md py-2 px-2"
								type="email"
								name="email"
								id="email"
								placeholder="eg. jonedoe@emaple.com"
							/>
						</div>
						<div className="flex flex-col my-2">
							<label htmlFor="password">password</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.currentTarget.value)}
								className="rounded-md py-2 px-2"
								type="password"
								name="password"
								id="password"
								placeholder="password"
							/>
						</div>

						<div className="pt-4 float-right">
							<button
								type="submit"
								className="block px-10 py-2 rounded-md bg-green-900 text-white hover:bg-green-800 hover:font-bold transition-colors duration-300">
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</Center>
	);
}

export default Pvc;
