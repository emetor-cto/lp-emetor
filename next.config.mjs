/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Export estático + nginx: não existe rota /_next/image (só no next start).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
