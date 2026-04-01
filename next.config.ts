import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./walker-runtime/**/*"],
  },
};

export default nextConfig;
