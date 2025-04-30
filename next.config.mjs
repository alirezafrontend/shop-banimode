/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apfiffumgiyibwoihwqc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/imgmen/**",
      },
    ],
  },
};

export default nextConfig;
