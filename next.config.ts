import type { NextConfig } from "next";

const repoName = "Next-Portfolio";
const isGitHubPagesBuild = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPagesBuild ? `/${repoName}` : "",
  assetPrefix: isGitHubPagesBuild ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild ? `/${repoName}` : "",
  },
};

export default nextConfig;
