import Head from "next/head";
import type { NextPage } from "next";
import { Navbar } from "@/components";

const Home: NextPage = () => {
	return (
		<>
			<Navbar />
			<div>
				<h3>hello</h3>
			</div>
		</>
	);
};

export default Home;
