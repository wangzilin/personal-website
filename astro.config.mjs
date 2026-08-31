import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// 个人网站配置
// site 字段用于 sitemap / SEO / RSS，先用占位域名，上线后改为真实域名
export default defineConfig({
  site: 'https://personal-site.pages.dev',
  trailingSlash: 'ignore',
  integrations: [sitemap(), mdx()],
  build: {
    format: 'directory',
  },
  // Cloudflare Pages 静态托管，默认输出即可
  output: 'static',
});
