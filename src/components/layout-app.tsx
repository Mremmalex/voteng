import React from "react";
import Content from "./Ui/Content";
import Sidebar from "./Ui/Sidebar";
interface Props {
	children: React.ReactNode;
}
function LayoutApp({ children }: Props) {
	return (
		<div className="flex w-[90%] mx-auto space-x-4 overflow-hidden">
			<Sidebar />
			<Content>{children}</Content>
		</div>
	);
}

export default LayoutApp;
