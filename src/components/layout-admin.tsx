import React, { useState } from "react";
import Content from "./Ui/Content";
import Navbar from "./Ui/Navbar";
import Sidebar from "./Ui/Sidebar";
interface Props {
	children: React.ReactNode;
}
function LayoutAdmin({ children }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<>
			<Navbar toggleMenu={toggleMenu} />
			<div
				onClick={() => setIsOpen(!isOpen)}
				className={`${
					isOpen ? "hidden" : "block"
				} fixed md:hidden top-[4em] left-0 right-0 bottom-0 w-full h-full cursor-pointer z-[2] bg-[rgba(0,0,0,0.3)]`}></div>
			<div className="flex md:w-[90%] md:mx-auto space-x-4 overflow-hidden">
				<Sidebar isOpen={isOpen} />
				<Content>{children}</Content>
			</div>
		</>
	);
}

export default LayoutAdmin;
