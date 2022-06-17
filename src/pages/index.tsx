import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";

const Home: NextPage = () => {
	const registerMutation = trpc.useMutation(["auth/register"]);
	const handleRegister = () => {
		registerMutation.mutate({
			fullname: "John Doe",
			email: "mremmalex@gmail.com",
			password: "123456",
		});
	};
	return (
		<div className="bg-green-900 h-screen text-white">
			<div className="flex w-[80%] mx-auto my-auto justify-center content-center bg-white shadow-xl rounded-md">
				<div className="w-[40em] h-[20em] ">
					<h3>register</h3>
				</div>
			</div>
			<button onClick={handleRegister}>
				{registerMutation.isLoading ? "loading" : "Submit"}
			</button>
			{registerMutation.error && <div>{registerMutation.error.message}</div>}
			{registerMutation.data && <div>{registerMutation.data.message}</div>}
		</div>
	);
};

export default Home;
