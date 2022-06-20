import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface Props {
	herf: string;
	Icon: IconType;
	title: string;
}

function MenuItem({ herf, Icon, title }: Props) {
	return (
		<li className=" px-20 py-3 hover:bg-green-700 hover:text-white ">
			<Link href={herf}>
				<a className="flex items-center justify-around">
					<Icon />
					<span className="pl-2">{title}</span>
				</a>
			</Link>
		</li>
	);
}

export default MenuItem;
