import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import jsQR from "jsqr";
import { PNG } from "pngjs";

const expectedUrl =
  "https://seesky-ai-glasses.github.io/Manual/";
const root = dirname(dirname(fileURLToPath(import.meta.url)));
const pngPath = join(root, "public", "qr", "sky-one-guide-qr.png");
const png = PNG.sync.read(await readFile(pngPath));
const pixels = new Uint8ClampedArray(
  png.data.buffer,
  png.data.byteOffset,
  png.data.byteLength,
);
const result = jsQR(pixels, png.width, png.height);

if (!result) {
  throw new Error("The QR code could not be decoded.");
}

if (result.data !== expectedUrl) {
  throw new Error(
    `The QR code contains an unexpected value: ${result.data}`,
  );
}

console.log(`QR code verified: ${result.data}`);
