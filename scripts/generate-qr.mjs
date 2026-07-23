import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const websiteUrl =
  "https://jayma23.github.io/Seesky-Glasses-Instruction/";
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(root, "public", "qr");
const pngPath = join(outputDirectory, "sky-one-guide-qr.png");
const svgPath = join(outputDirectory, "sky-one-guide-qr.svg");

const options = {
  errorCorrectionLevel: "H",
  margin: 4,
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
};

await mkdir(outputDirectory, { recursive: true });

await QRCode.toFile(pngPath, websiteUrl, {
  ...options,
  type: "png",
  width: 2048,
});

const svg = await QRCode.toString(websiteUrl, {
  ...options,
  type: "svg",
});
await writeFile(svgPath, svg);

console.log(`QR code created for ${websiteUrl}`);
