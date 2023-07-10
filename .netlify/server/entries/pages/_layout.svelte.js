import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const global = "";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const Loading_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".loading-animation.svelte-146duvy.svelte-146duvy{--accent:hsl(186, 68%, 29%);--loading-ball-size:8px;--loading-spacing-size:12px;--loading-ball-spacing-size:calc(\n    (var(--loading-ball-size) + var(--loading-spacing-size))\n  );--loading-total-size:calc(\n    (var(--loading-ball-size) * 2 + var(--loading-spacing-size))\n  );width:var(--loading-total-size);height:var(--loading-total-size);position:relative;display:inline-block;-webkit-animation:svelte-146duvy-spin 2s infinite linear;animation:svelte-146duvy-spin 2s infinite linear;pointer-events:none}.loading-animation.svelte-146duvy .ball.svelte-146duvy{position:absolute;width:var(--loading-ball-size);height:var(--loading-ball-size);border-radius:100%;background-color:var(--accent)}.loading-animation.svelte-146duvy .ball.ball-ne.svelte-146duvy{background-color:rgb(var(--yellow-color));animation:svelte-146duvy-ne 2s infinite linear}.loading-animation.svelte-146duvy .ball.ball-nw.svelte-146duvy{background-color:rgb(var(--yellow-color));animation:svelte-146duvy-nw 2s infinite linear;right:0}.loading-animation.svelte-146duvy .ball.ball-sw.svelte-146duvy{background-color:rgb(var(--yellow-color));animation:svelte-146duvy-sw 2s infinite linear;right:0;bottom:0}.loading-animation.svelte-146duvy .ball.ball-se.svelte-146duvy{background-color:rgb(var(--yellow-color));-webkit-animation:svelte-146duvy-se 2s infinite linear;animation:svelte-146duvy-se 2s infinite linear;bottom:0}@keyframes svelte-146duvy-spin{to{transform:rotate(720deg)}}@keyframes svelte-146duvy-ne{50%{transform:translate3d(calc(var(--loading-ball-spacing-size) / 3), calc(var(--loading-ball-spacing-size) / 3), 0)}}@keyframes svelte-146duvy-nw{50%{transform:translate3d(calc(var(--loading-ball-spacing-size) / -3), calc(var(--loading-ball-spacing-size) / 3), 0)}}@keyframes svelte-146duvy-sw{50%{transform:translate3d(calc(var(--loading-ball-spacing-size) / -3), calc(var(--loading-ball-spacing-size) / -3), 0)}}@keyframes svelte-146duvy-se{50%{transform:translate3d(calc(var(--loading-ball-spacing-size) / 3), calc(var(--loading-ball-spacing-size) / -3), 0)}}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isLoading: isLoading2 = false } = $$props;
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading2 !== void 0)
    $$bindings.isLoading(isLoading2);
  $$result.css.add(css$1);
  return `${isLoading2 ? `<div class="${"loading-animation svelte-146duvy"}"><div class="${"ball ball-ne svelte-146duvy"}"></div>
    <div class="${"ball ball-nw svelte-146duvy"}"></div>
    <div class="${"ball ball-sw svelte-146duvy"}"></div>
    <div class="${"ball ball-se svelte-146duvy"}"></div></div>` : ``}`;
});
const Loading_page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-icukzj.svelte-icukzj{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:var(--padding)}section.svelte-icukzj h3.svelte-icukzj{font-size:var(--fs-h3);color:rgb(var(--color))}",
  map: null
};
let isLoading = true;
const Loading_page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-icukzj"}">${validate_component(Loading, "Loading").$$render($$result, { isLoading }, {}, {})}
	<h3 class="${"svelte-icukzj"}">Loading...</h3>
</section>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webManifest;
  webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
  return `${$$result.head += `<!-- HEAD_svelte-hnr6zt_START --><!-- HTML_TAG_START -->${webManifest}<!-- HTML_TAG_END --><!-- HEAD_svelte-hnr6zt_END -->`, ""}

${``}

${`${validate_component(Loading_page, "LoadingPage").$$render($$result, {}, {}, {})}`}
${``}`;
});
export {
  Layout as default
};
