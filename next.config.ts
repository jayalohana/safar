import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  agentRules: false,
};

export default nextConfig;
