import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import MenuItem from "../shared/MenuItem";

function Sidebar() {
	return (
		<aside className="border-r-[1px] pt-2 border-gray-500">
			<div className="sticky flex-1 w-[20em] h-[40em]  ">
				<ul className="flex flex-col place-items-center py-10">
					<MenuItem herf="/auth/admin" title="Content 1" Icon={MdDashboard} />
					<li>Content</li>
					<li>Content</li>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
