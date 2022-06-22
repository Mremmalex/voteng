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
		<li className="block w-[20em] px-20 py-3 mr-2 hover:bg-green-700 hover:text-white cursor-pointer">
			<Link href={herf!}>
				<a className="flex items-center float-left">
					<Icon className="fixed left-24" />
					<span className="pl-1">{title}</span>
				</a>
			</Link>
		</li>
	);
}

export default MenuItem;
