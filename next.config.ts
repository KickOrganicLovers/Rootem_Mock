import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages でリポジトリ名を含む URL (https://<username>.github.io/<repository-name>/) 
  // で公開する場合、そのリポジトリ名を basePath に設定してください。
  // 例: リポジトリ名が 'my-rootem-mock' の場合: basePath: '/my-rootem-mock'
  // basePath: '/<repository-name>',
};

export default nextConfig;
