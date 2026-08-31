import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章集合 —— 在 src/content/blog/ 下放 .md 文件即可自动收录
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().default(''),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// 作品 / 产品集合 —— 在 src/content/works/ 下放 .md 文件即可自动收录
const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/works' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string().default(''),
    description: z.string().default(''),
    status: z.enum(['online', 'developing', 'planning']).default('developing'),
    tags: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(99),
  }),
});

// 公开笔记 / 短内容集合 —— 在 src/content/notes/ 下放 .md 文件即可自动收录
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string().default(''),
    source: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, works, notes };
