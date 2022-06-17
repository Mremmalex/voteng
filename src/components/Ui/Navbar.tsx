import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<header className="bg-green-900 font-white">
			<div className="relative flex h-[4em] text-center align-middle justify-between content-center px-10 py-5 text-white ">
				<div className="">
					<h3 className="font-bold ">Logo</h3>
				</div>
				<nav className=" ">
					<ul
						className={`${
							isOpen ? "absolute sm:top-0 sm:left-0 z-10" : "lg:flex"
						} fixed  text-black h-full w-[19em] bg-white lg:bg-transparent  md:w-[30em] lg:text-white lg:h-0  flex-col md:flex-row md:justify-between md:px-10 md:py-5 justify-center sm:content-center sm:pt-10 `}>
						<li>content1</li>
						<li>content2</li>
						<li>content3</li>
						<li>content4</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
