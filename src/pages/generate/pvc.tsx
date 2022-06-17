import Center from "@/components/shared/Center";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Pvc() {
	const [pvc, setPvc] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const loginMutation = trpc.useMutation(["auth/login"]);
	const loginHandler = () => {
		loginMutation.mutate({
			pvc,
			password,
		});

		if (loginMutation.isSuccess) {
			router.push("/voteboard");
		}
	};
	return (
		<Center>
			<div className="flex justify-around place-items-center  bg-green-700 h-[30em] rounded-md  ">
				<div className=" w-[20em] px-4">
					<h1 className="text-white font-extrabold text-[3em] text-center">
						Your Vote Counts
					</h1>
				</div>
				<div className="w-[22em] px-4">
					<h1 className="text-center text-white font-bold pt-4">Login</h1>
					<form>
						<div className="flex flex-col">
							<label htmlFor="pvc">PVC number</label>
							<input
								value={pvc}
								onChange={(e) => setPvc(e.currentTarget.value)}
								className="rounded-md py-2 px-2"
								type="text"
								name="pvc"
								id="pvc"
								placeholder="eg. N3343J345323"
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="password">password</label>
							<input
								value={password}
								onChange={(e) => setPassword(e.currentTarget.value)}
								className="rounded-md py-2 px-2"
								type="text"
								name="password"
								id="password"
								placeholder="password"
							/>
						</div>

						<div className="pt-4 float-right">
							<button
								onClick={loginHandler}
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
