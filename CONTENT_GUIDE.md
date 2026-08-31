# 内容上传指南（小白版）

> 改网站内容，只动 Markdown（.md）文件，不用碰代码。在 GitHub 网页直接编辑即可。

## 三种内容，三个文件夹

| 内容类型 | 文件夹 | 在网站哪里显示 |
|---|---|---|
| 文章 | `src/content/blog/` | 首页"最近推进" + `/blog` 文章列表 + 文章详情页 |
| 产品 | `src/content/works/` | 首页"产品矩阵" + `/works` 产品列表 + 产品详情页 |
| 笔记 | `src/content/notes/` | 首页"最近推进"时间线 |

---

## 一、发一篇文章

### 方式 1：复制现有文件改（最简单）

1. 进 GitHub 仓库 `src/content/blog/`
2. 点 `welcome.md` → 右上角 `...` → `Copy file` 或直接编辑
3. 改文件名（如 `my-first-post.md`）和内容
4. `Commit changes`

### 方式 2：新建文件

1. 进 `src/content/blog/` → `Add file` → `Create new file`
2. 文件名填 `my-post.md`（英文，用短横线，不要中文不要空格）
3. 粘贴下面模板，改内容：

```markdown
---
title: 我的文章标题
pubDate: 2026-09-01
description: 一句话摘要，会显示在列表和搜索引擎
tags: [标签1, 标签2]
draft: false
---

正文从这里开始，用 Markdown 语法。

## 二级标题

普通段落。

- 列表项 1
- 列表项 2

[链接文字](https://example.com)
```

4. `Commit changes` → 1-2 分钟后网站更新

### 字段说明

| 字段 | 必填 | 说明 |
|---|---|---|
| `title` | 是 | 文章标题 |
| `pubDate` | 是 | 发布日期 `YYYY-MM-DD`，决定排序 |
| `description` | 否 | 摘要，显示在列表和 SEO |
| `tags` | 否 | 标签数组 |
| `draft` | 否 | `true` 时不发布，默认 `false` |

---

## 二、加一个产品

进 `src/content/works/`，新建 `my-product.md`：

```markdown
---
name: 产品名
tagline: 一句话副标题
description: 产品描述，会显示在卡片上
status: developing
tags: [标签]
links:
  - label: 访问
    url: https://example.com
order: 5
---

产品详情正文。

## 功能

- 功能 1
- 功能 2
```

### status 状态值

| 值 | 显示为 | 颜色 |
|---|---|---|
| `online` | 已上线 | 绿色 |
| `developing` | 开发中 | 黄色 |
| `planning` | 规划中 | 灰色 |

### order

数字越小排越前面（1-4 显示在首页，其余在产品页）。

---

## 三、发一条笔记（最近进展）

进 `src/content/notes/`，新建 `update-xxx.md`：

```markdown
---
title: 一句话进展
pubDate: 2026-09-01
description: 简短描述
source: 来源（如 公众号 / 网站）
draft: false
---

可选的正文（可以不写，只靠标题和描述）。
```

笔记会按日期倒序显示在首页"最近推进"时间线。

---

## 四、改个人信息

改 `src/data/site.ts` 一个文件，包含：

- 姓名、别名、身份定位
- 首页 Hero 文案
- 三张服务卡内容
- 数据统计
- 三件事
- 社区/合作文案
- 社交链接
- SEO 标题描述关键词
- 默认皮肤

改完 `Commit changes`，网站自动更新。

---

## Markdown 速查

| 你想要的 | 写法 |
|---|---|
| 标题 | `# 一级` `## 二级` `### 三级` |
| 加粗 | `**文字**` |
| 列表 | `- 项` |
| 链接 | `[文字](网址)` |
| 图片 | `![描述](图片地址)` |
| 引用 | `> 文字` |
| 代码 | `` `代码` `` |

图片上传：把图片放 `public/images/`，引用 `/images/xxx.png`。
