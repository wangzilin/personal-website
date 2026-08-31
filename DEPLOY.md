# 部署手册（小白版）

> 这份手册假设你完全不懂技术，照着点就行。全程免费。

## 整体流程（4 步上线）

```
1. 注册 GitHub 账号      （代码仓库，免费）
2. 把代码传到 GitHub     （用网页或工具上传）
3. 注册 Cloudflare 账号  （免费托管，无限流量）
4. Cloudflare 连接 GitHub → 自动部署 → 上线
```

上线后你的网址是 `https://你的项目名.pages.dev`，全球可访问、可被搜索引擎收录。

---

## 第 1 步：注册 GitHub

1. 打开 https://github.com/signup
2. 填用户名（英文）、邮箱、密码，完成注册
3. 记住你的用户名，后面要用

---

## 第 2 步：把代码传到 GitHub

### 方式 A：网页上传（最简单，推荐小白）

1. 登录 GitHub，点右上角 `+` → `New repository`
2. Repository name 填 `personal-site`
3. 选 `Public`（必须公开，Cloudflare 免费版要求）
4. 勾选 `Add a README file`
5. 点 `Create repository`
6. 进入仓库后，点 `Add file` → `Upload files`
7. 把项目里**除 `node_modules` 和 `dist` 之外**的所有文件拖进去
8. 点 `Commit changes`

### 方式 B：让我帮你推送（需要你提供 Token）

如果你想让我直接把代码推到你的 GitHub 仓库，需要给我：

1. 在 GitHub 创建一个空仓库 `personal-site`（不要勾 README）
2. 生成 Personal Access Token：
   - 头像 → `Settings` → `Developer settings` → `Personal access tokens` → `Fine-grained tokens`
   - 选 `Generate new token`
   - Repository access 选 `Only select repositories` → 选 `personal-site`
   - Permissions → `Repository permissions` → `Contents` 选 `Read and write`
   - 生成后复制 token
3. 把【GitHub 用户名】和【Token】发给我
4. 我用 git 推送，完成后你可以撤销 Token

> 安全提示：Token 等于你的代码修改权限。用完一定要在 GitHub 设置里 Revoke（撤销）。我只用它推一次代码。

---

## 第 3 步：注册 Cloudflare 并连接 GitHub

1. 打开 https://pages.cloudflare.com → `Sign up`（免费）
2. 登录后点 `Create a project` → `Connect to Git`
3. 授权 Cloudflare 访问 GitHub，选 `personal-site` 仓库
4. 配置构建：
   - **Project name**：`personal-site`（这决定你的域名 `personal-site.pages.dev`）
   - **Production branch**：`main`
   - **Framework preset**：选 `Astro`
   - **Build command**：`npm run build`
   - **Build output directory**：`dist`
   - **Node version**：`22`（环境变量加 `NODE_VERSION` = `22`）
5. 点 `Save and Deploy`
6. 等 1-2 分钟，构建完成后会给你一个 `https://personal-site.pages.dev` 的网址

上线成功！以后你每次在 GitHub 改代码，Cloudflare 会自动重新部署。

---

## 第 4 步：让搜索引擎能搜到你

### 4.1 改网站真实域名

代码里 `astro.config.mjs` 的 `site` 字段和 `public/robots.txt` 里现在是占位域名 `personal-site.pages.dev`。部署后改成你的真实域名（Cloudflare 给的那个），重新提交代码即可。

### 4.2 提交到 Google

1. 打开 https://search.google.com/search-console
2. 用 GitHub 账号或邮箱登录
3. 添加资源 → 输入你的 `https://personal-site.pages.dev`
4. 验证方式选 HTML 标记或 DNS（Cloudflare 域名用 CNAME 验证最简单）
5. 验证后提交 sitemap：填 `sitemap-index.xml`

### 4.3 提交到百度（国内可搜到）

1. 打开 https://ziyuan.baidu.com
2. 登录，添加站点 `https://personal-site.pages.dev`
3. 验证后提交 sitemap

> Cloudflare 的 .pages.dev 域名国内访问没问题，但百度收录可能慢。如果想国内 SEO 更好，后续可买个 ¥50/年的域名绑上。

---

## 之后怎么更新网站内容

改文章 / 产品 / 笔记，**不需要碰代码**，只在 GitHub 网页编辑 Markdown 文件：

1. 进你的 GitHub 仓库
2. 找到对应文件：
   - 文章：`src/content/blog/` 下的 `.md`
   - 产品：`src/content/works/` 下的 `.md`
   - 笔记：`src/content/notes/` 下的 `.md`
3. 点文件 → 右上角铅笔图标编辑 → `Commit changes`
4. 1-2 分钟后网站自动更新

详见 `CONTENT_GUIDE.md`（内容上传指南）。
