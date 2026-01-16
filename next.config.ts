import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/https://kickorganiclovers.github.io/Rootem_Mock',
  assetPrefix: '/https://kickorganiclovers.github.io/Rootem_Mock/',
  images: {
    unoptimized: true,
  },
  // GitHub Pages でリポジトリ名を含む URL (https://<username>.github.io/<repository-name>/)
  // で公開する場合、そのリポジトリ名を basePath に設定してください。
  // 例: リポジトリ名が 'my-rootem-mock' の場合: basePath: '/my-rootem-mock'
  // 注意: basePath を設定した場合、public フォルダ内の画像等を参照する際は basePath を含める必要があります。
  // 例: src={`/${process.env.NEXT_PUBLIC_BASE_PATH || ''}/map.png`}
  // basePath: '/<repository-name>',
};

export default nextConfig;
