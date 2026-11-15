# Yang 的技术博客

Hexo + Fluid，公开网址：https://yang071212.github.io/

## 本地预览

需要 Node.js 22 和 npm：

```sh
npm ci
npm run server
```

编辑 `source/_posts/` 下的 Markdown 文章；分类、标签放在文章开头的 YAML 中。新文章可运行 `npx hexo new "文章标题"`。构建使用 `npm run build`，结果在 `public/`。

## 发布

推送到 main 自动运行 `.github/workflows/pages.yml`，构建成功后发布到 GitHub Pages。仓库 Settings → Pages → Source 必须为 GitHub Actions。无需额外部署密钥。

`_config.yml` 配置站点地址，`_config.fluid.yml` 配置主题。旧欢迎页保存在 `source/legacy/index.html`，继续通过 `/legacy/` 访问；根目录旧 HTML 作为迁移前的历史快照保留，Actions 只发布 public 目录。

恢复旧站可回退迁移提交，并将 Pages 来源恢复为 main 分支根目录。
