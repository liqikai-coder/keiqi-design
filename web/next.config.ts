import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 全站图片已本地化到 public/images/，无远程图源
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
