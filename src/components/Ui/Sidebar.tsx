import Link from "next/link";
import React, { useState } from "react";
import { MdDashboard, MdHowToVote, MdModeEdit } from "react-icons/md";
import MenuItem from "../shared/MenuItem";

interface Props {
	isOpen: boolean;
}

function Sidebar({ isOpen }: Props) {
	return (
		<aside
			className={`${
				isOpen ? "hidden" : "absolute"
			} z-10 md:z-0 bg-white shadow-md md:shadow-none  md:flex md:border-r-[1px] pt-2 border-gray-500 h-[40em] lg:h-[50em`}>
			<div className="flex-1 w-[20em] h-[40em] overflow-y-auto overflow-hidden">
				<ul className="flex flex-col place-items-center py-10">
					<MenuItem herf="/auth/admin" title="Dashboard" Icon={MdDashboard} />
					<MenuItem
						herf="/auth/admin/new_election"
						Icon={MdHowToVote}
						title="New Election"
					/>
					<MenuItem
						Icon={MdModeEdit}
						title="Edit Election"
						herf="/auth/admin/edit_election"
					/>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
