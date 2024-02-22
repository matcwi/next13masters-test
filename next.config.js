/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		domains: ["static-ourstore.hyperfunctor.com"],
	},
	redirects: async () => {
		return [
			{
				source: "/categories/t-shirts",
				destination: "categories/t-shirts/1",
				permanent: false,
			},
		];
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
