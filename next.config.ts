import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "ghlco.in" }],
        destination: "https://www.ghlco.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
