import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "xiliherb.com" }],
        destination: "https://www.xiliherb.com/:path*",
        permanent: true,
        statusCode: 308,
      },
    ];
  },
};

export default nextConfig;
