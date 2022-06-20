import { Navbar } from "@/components";
import LayoutAdmin from "@/components/layout-admin";
import React from "react";

function Admin() {
	return (
		<div>
			<Navbar />
			<LayoutAdmin>
				<h1>hello</h1>
			</LayoutAdmin>
		</div>
	);
}

export default Admin;
