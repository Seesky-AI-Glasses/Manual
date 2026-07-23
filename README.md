# Seesky Glasses Instruction

Sky One 智能眼镜中文使用指南网站。

## 在线访问

https://jayma23.github.io/Seesky-Glasses-Instruction/

## 内容

- 三分钟快速上手
- 菜单键与确认键说明
- AI Camera、Photo、Translate、Focus 与 Status 使用流程
- 结果页和绿色显示状态说明
- 常见故障排查与使用注意事项

## 本地运行

需要 Node.js `22.13.0` 或更高版本。

```bash
npm install
npm run dev
```

生产构建与静态导出：

```bash
npm run export:static
```

静态文件会生成在 `_site` 目录。推送至 `main` 分支后，GitHub Actions
会自动发布到 GitHub Pages。

页面内容以仓库 `main` 分支的当前版本为准。

## 客户扫码二维码

二维码固定指向网站地址，网站内容更新后无需更换二维码：

- PNG：`public/qr/sky-one-guide-qr.png`
- SVG：`public/qr/sky-one-guide-qr.svg`

重新生成二维码：

```bash
npm run generate:qr
```
