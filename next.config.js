/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		domains: ["static-ourstore.hyperfunctor.com"],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
