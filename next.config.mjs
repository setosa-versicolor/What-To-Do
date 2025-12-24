const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isPages = process.env.GITHUB_PAGES === "true";

export default {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages && repo ? `/${repo}` : "",
  assetPrefix: isPages && repo ? `/${repo}/` : ""
};
