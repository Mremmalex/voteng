import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";

interface Props {
	herf: string;
	Icon: IconType;
	title: string;
}

function MenuItem({ herf, Icon, title }: Props) {
	const router = useRouter();
	return (
		<li className="">
			<Link href={herf}>
				<a
					className={`flex items-center w-[20em] px-20 py-3 mr-2 mb-1 hover:bg-green-700 hover:text-white cursor-pointer ${
						router.asPath === herf ? "bg-green-700 text-white " : ""
					}`}>
					<Icon className="md:fixed md:left-24" />
					<span className="pl-3 md:pl-1">{title}</span>
				</a>
			</Link>
		</li>
	);
}

export default MenuItem;
