import type { NextConfig } from "next";

const repoBase =
  process.env.NEXT_PUBLIC_BASE_PATH ||
  process.env.BASE_PATH ||
  (process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`
    : "");
const normalizedBasePath =
  repoBase && repoBase !== "/" ? repoBase.replace(/\/+$/, "") : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: normalizedBasePath || undefined,
  assetPrefix: normalizedBasePath ? `${normalizedBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
