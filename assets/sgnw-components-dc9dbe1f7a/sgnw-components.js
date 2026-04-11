import { p as promiseResolve, b as bootstrapLazy } from './index-DPMxB3IU.js';
export { s as setNonce } from './index-DPMxB3IU.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.43.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["fsw-button_18",[[1,"fsw-signmaker",{"sequence":[1],"sign":[1537],"styling":[1],"baseUrl":[1,"base-url"]},[[0,"sgnw-sign-change","onChildSignChange"]]],[1,"fsw-palette",{"orientation":[1],"size":[1],"styling":[1],"baseUrl":[1,"base-url"],"alphabet":[1],"group":[1537],"base":[1537],"more":[1540],"lower":[1540],"palette":[32],"hasMore":[32],"hasLower":[32]},[[0,"sgnw-palette-symbol-click","onPaletteSymbolClick"]],{"alphabet":[{"onAlphabetChange":0}],"group":[{"onGroupChange":0}],"base":[{"onBaseChange":0}],"more":[{"onMoreChange":0}],"lower":[{"onLowerChange":0}]}],[1,"swu-palette",{"orientation":[1],"size":[1],"styling":[1],"baseUrl":[1,"base-url"],"alphabet":[1],"group":[1537],"more":[1540],"palette":[32],"hasMore":[32]},[[0,"sgnw-palette-symbol-click","onPaletteSymbolClick"]],{"alphabet":[{"onAlphabetChange":0}],"group":[{"onGroupChange":0}],"more":[{"onMoreChange":0}]}],[1,"fsw-platform",{"baseUrl":[1,"base-url"],"auto":[4],"timeoutMs":[2,"timeout-ms"],"checking":[32],"lastOk":[32],"lastStatus":[32],"lastLatencyMs":[32],"lastAuthMode":[32],"lastError":[32],"checkNow":[64]}],[1,"fsw-search",{"value":[32]}],[1,"swu-search",{"value":[32]}],[1,"fsw-sequence",{"orientation":[1],"sign":[1537],"styling":[1],"baseUrl":[1,"base-url"],"sequence":[32]},[[0,"sgnw-drop","onDrop"]],{"sign":[{"onSignChange":0}]}],[1,"fsw-signbox",{"sign":[1537],"styling":[1],"baseUrl":[1,"base-url"],"parsed":[32],"size":[32]},[[0,"sgnw-drop","onDrop"]],{"sign":[{"onSignChange":0}]}],[1,"fsw-palette-symbol",{"symbol":[1],"styling":[1],"baseUrl":[1,"base-url"],"dropTarget":[1,"drop-target"]}],[1,"swu-palette-symbol",{"symbol":[1],"styling":[1],"baseUrl":[1,"base-url"],"dropTarget":[1,"drop-target"]}],[1,"fsw-button",{"svg":[1],"ariaLabel":[1,"aria-label"]}],[257,"fsw-sign",{"sign":[1],"styling":[1],"baseUrl":[1,"base-url"]}],[1,"swu-button",{"svg":[1],"ariaLabel":[1,"aria-label"]}],[257,"swu-sign",{"sign":[1],"styling":[1],"baseUrl":[1,"base-url"]}],[1,"fsw-sequence-symbol",{"symbol":[1],"index":[2],"styling":[1],"baseUrl":[1,"base-url"],"dropTarget":[1,"drop-target"]}],[1,"fsw-spatial",{"symbol":[1],"index":[2],"styling":[1],"baseUrl":[1,"base-url"]}],[257,"swu-symbol",{"symbol":[1],"styling":[1],"baseUrl":[1,"base-url"]}],[257,"fsw-symbol",{"symbol":[1],"styling":[1],"baseUrl":[1,"base-url"]}]]],["fsw-vp",[[257,"fsw-vp",{"vp":[1],"styling":[1],"baseUrl":[1,"base-url"],"zoom":[2],"laneOffset":[2,"lane-offset"]}]]],["swu-vp",[[257,"swu-vp",{"vp":[1],"styling":[1],"baseUrl":[1,"base-url"],"zoom":[2],"laneOffset":[2,"lane-offset"]}]]],["fsw-auth",[[1,"fsw-auth",{"baseUrl":[1,"base-url"],"storageKey":[1,"storage-key"],"persist":[4],"timeoutMs":[2,"timeout-ms"],"checking":[32],"authenticated":[32],"token":[32],"username":[32],"password":[32],"tokenInput":[32],"statusText":[32],"errorText":[32],"meText":[32],"setToken":[64],"clearToken":[64],"getToken":[64],"login":[64],"checkAuth":[64],"authFetch":[64]}]]]], options);
});
