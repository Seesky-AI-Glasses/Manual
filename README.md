# Sky One Manual

Sky One 智能眼镜用户使用说明书网站。

## 在线访问

https://seesky-ai-glasses.github.io/Manual/

## 内容

- 三分钟快速上手：充电、安装 App、连接眼镜
- 蓝牙连接与 Wi-Fi 设置
- 菜单键与确认键说明
- AI Camera、Photo、Translate、Focus 与 Status 使用流程
- 结果页和绿色提示状态说明
- 眼镜软件更新
- 常见问题与日常保养

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

## 客户扫码二维码

二维码固定指向网站地址，网站内容更新后无需更换二维码：

- PNG：`public/qr/sky-one-guide-qr.png`
- SVG：`public/qr/sky-one-guide-qr.svg`

重新生成与校验二维码：

```bash
npm run generate:qr
npm run verify:qr
```
