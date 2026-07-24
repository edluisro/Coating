/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/landing-next",
  basePath: "/landing-next",
  distDir: ".next-build",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  output: "export",
};

export default nextConfig;
