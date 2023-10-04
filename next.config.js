/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.pixabay.com",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "cdn-icons-png.flaticon.com",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "i.dummyjson.com",
				port: "",
				pathname: "**",
			},
		],
	},
	experimental: {
		serverActions: true,
	},
};

module.exports = nextConfig;
