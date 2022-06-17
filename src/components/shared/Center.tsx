import React from "react";

type Props = {
	children: React.ReactNode;
};

function Center({ children }: Props) {
	return (
		<div className=" w-[70%] mx-auto  px-10 ">
			<div className="mt-20">{children}</div>
		</div>
	);
}

export default Center;
