import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
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
  assert.match(html, /长按进入下一轮/);
  assert.match(html, /电量与充电/);
  assert.match(html, /张开镜腿就会自动开机/);
  assert.match(html, /不要用两头都是 USB-C 的线（Type-C 转 Type-C）/);
  assert.match(html, /skyoneglasses@gmail\.com/);
  assert.match(html, /具体位置以实物标注为准/);
  assert.doesNotMatch(html, /Your site is taking shape/);
});

test("server-renders the English guide at /en", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Sky One Smart Glasses User Guide<\/title>/i);
  assert.match(html, /Three steps to get going/);
  assert.match(html, /Hold for the next round/);
  assert.match(html, /Battery and charging/);
  assert.match(html, /open the temples/);
  assert.match(html, /Don’t use a cable with USB-C\s+on both ends/);
  assert.match(html, /skyoneglasses@gmail\.com/);
  assert.match(html, /Seesky Glasses/);
});
