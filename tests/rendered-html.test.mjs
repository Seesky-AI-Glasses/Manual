import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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
}

test("server-renders the Sky One instruction guide", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Sky One 智能眼镜使用指南<\/title>/i);
  assert.match(html, /三步，开始使用/);
  assert.match(html, /AI Camera/);
  assert.match(html, /Translate/);
  assert.match(html, /Focus/);
  assert.match(html, /长按约 1\.2 秒进入下一轮/);
  assert.match(html, /外壳上的具体位置以实物标注为准/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});
