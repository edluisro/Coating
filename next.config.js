/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/landing-next",
  basePath: "/landing-next",
  distDir: ".next-build",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
