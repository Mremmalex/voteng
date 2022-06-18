import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/app.scss";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "@/server/routers/_app";
import superjson from "superjson";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default withTRPC<AppRouter>({
	config({ ctx }) {
		const url = process.env.NETLIFY_URL
			? `https://${process.env.NETLIFY_URL}/api/trpc`
			: "http://localhost:3000/api/trpc";

		return {
			url,
			transformer: superjson,
		};
	},
	ssr: true,
})(MyApp);
