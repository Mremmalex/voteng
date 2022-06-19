import React from "react";

function Sidebar() {
	return (
		<aside className="border-r-[1px] pt-2 border-gray-500">
			<div className="sticky flex-1 w-[20em] h-[40em]  ">
				<ul className="flex flex-col place-items-center py-10">
					<li>Content</li>
					<li>Content</li>
					<li>Content</li>
				</ul>
			</div>
		</aside>
	);
}

export default Sidebar;
