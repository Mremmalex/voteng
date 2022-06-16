import React, { ReactNode } from "react";
import Meta from "./Meta";

interface Props {
	children: ReactNode;
}

function Layout({ children }: Props) {
	return (
		<>
			<Meta />
			{children}
		</>
	);
}

export default Layout;
