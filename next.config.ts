import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "xiliherb.com" }],
        destination: "https://www.xiliherb.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
