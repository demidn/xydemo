import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return Promise.resolve([
      {
        source: '/',
        destination: '/demo1',
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
