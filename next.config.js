/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/electro",
  basePath: "/electro",
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
