import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

interface Props {
	toggleMenu: () => void;
}

function Navbar({ toggleMenu }: Props) {
	return (
		<>
			<header className="bg-green-900 font-white">
				<div className="relative flex text-center  place-items-center justify-between  px-10 h-[4em] text-white ">
					<div className="flex items-center">
						<span className="pr-4">
							<IoMdMenu
								onClick={toggleMenu}
								className="md:hidden w-8 h-10 hover:cursor-pointer"
							/>
						</span>
						<h3 className="font-bold hover:cursor-pointer">voteng</h3>
					</div>
					{/* <nav className="">
						<ul className="hidden md:flex justify-between ">
							<li className="px-3 py-4 border-solid hover:border-white border border-green-900 border-t-0 border-x-0 border-spacing-2">
								content1
							</li>
							<li className="px-3 py-4 border-solid hover:border-white border border-green-900 border-t-0 border-x-0 border-spacing-2">
								content2
							</li>
							<li className="px-3 py-4 border-solid hover:border-white border border-green-900 border-t-0 border-x-0 border-spacing-2">
								content3
							</li>
							<li className="px-3 py-4 border-solid hover:border-white border border-green-900 border-t-0 border-x-0 border-spacing-2">
								content4
							</li>
						</ul>
						<ul
							className={`md:hidden flex text-black h-full w-[19em] bg-white lg:bg-transparent  md:w-[30em] lg:text-white lg:h-0  flex-col md:flex-row md:justify-between md:px-10 md:py-5 justify-center sm:content-center sm:pt-10 `}>
							<li>content1</li>
							<li>content2</li>
							<li>content3</li>
							<li>content4</li>
						</ul>
					</nav> */}
				</div>
			</header>
		</>
	);
}

export default Navbar;
