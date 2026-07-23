import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(root, "_site");
const clientDirectory = join(root, "dist", "client");
const assetDirectory = join(clientDirectory, "assets");
const basePath = process.env.BASE_PATH ?? "/Seesky-Glasses-Instruction";

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(join(outputDirectory, "assets"), { recursive: true });

const workerPath = join(root, "dist", "server", "index.js");
const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request("https://example.invalid/", {
    headers: { accept: "text/html" },
  }),
  {
    ASSETS: {
      fetch: async () => new Response("Not found", { status: 404 }),
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Static render failed with status ${response.status}`);
}

let html = await response.text();
html = html
  .replace(/\s*<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/\s*<link\b[^>]*(?:rel=["']modulepreload["']|as=["']script["'])[^>]*>/gi, "")
  .replaceAll('href="/assets/', `href="${basePath}/assets/`)
  .replaceAll('src="/assets/', `src="${basePath}/assets/`)
  .replaceAll('href="/images/', `href="${basePath}/images/`)
  .replaceAll('src="/images/', `src="${basePath}/images/`);

for (const entry of await readdir(assetDirectory)) {
  if (entry.endsWith(".css")) {
    await cp(join(assetDirectory, entry), join(outputDirectory, "assets", entry));
  }
}

await cp(join(clientDirectory, "images"), join(outputDirectory, "images"), {
  recursive: true,
});
await cp(join(root, "public", "qr"), join(outputDirectory, "qr"), {
  recursive: true,
});
await writeFile(join(outputDirectory, "index.html"), html);
await writeFile(join(outputDirectory, "404.html"), html);
await writeFile(join(outputDirectory, ".nojekyll"), "");

console.log(`Static site exported to ${outputDirectory}`);
