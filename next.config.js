/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
<<<<<<< HEAD
	//output: "export", // Comment this line when not building the project
	reactStrictMode: true,
	trailingSlash: true,
	swcMinify: true,
	basePath: isProd ? "" : undefined,
	assetPrefix : isProd ? "" : undefined,
	images: {
		loader: "imgix",
		path: "/",
	},
=======
  output: "export", // Comment this line when not building the project
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  basePath: isProd ? "" : undefined,
  assetPrefix: isProd ? "" : undefined,
  images: {
    loader: "imgix",
    path: "/",
  },
  async redirects() {
    return [
      {
        source: '/:path*', // Match all routes
        destination: '/landingpage', // Redirect to the landing page
        permanent: true,
      },
    ];
  },
>>>>>>> e6c1bb270fa6d06ffe706672ad7f2900eb5d0262
};

module.exports = nextConfig;
