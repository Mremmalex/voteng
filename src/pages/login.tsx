import Center from "@/components/shared/Center";
import React from "react";

export default function Login() {
	return (
		<Center>
			<div className="bg-green-700 h-[30em] flex place-items-center px-20">
				<div>
					<h1 className="text-white text-4xl">Welcome Back</h1>
				</div>

				<div>
					<form >
						<div>
							<label htmlFor="PVC number">email</label>
						</div>
					</form>
				</div>
			</div>
		</Center>
	);
}
