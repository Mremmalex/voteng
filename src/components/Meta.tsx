import Head from "next/head";
import React from "react";

interface Props {
	description: string;
	title: string;
	keywords: string;
}

function Meta({ description, title, keywords }: Props) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="Icon" href="./favicon.ico" />
		</Head>
	);
}

Meta.defaultProps = {
	title: "Vote NG",
	keywords: "Voting, vote Nigerian Vote",
	description: "Site for Election voting in nigeria",
};

export default Meta;
