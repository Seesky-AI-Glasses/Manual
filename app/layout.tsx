import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sky One 智能眼镜使用指南",
  description:
    "Sky One 智能眼镜快速上手、按键说明、AI Camera、Photo、Translate、Focus、Status 与故障排查。",
  applicationName: "Sky One Manual",
  keywords: ["Sky One", "Seesky", "智能眼镜", "使用指南", "AI Camera"],
};

export const viewport: Viewport = {
  themeColor: "#080d0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
