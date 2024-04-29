"use strict";

async function registerSW() {
  if (!navigator.serviceWorker)
    throw new Error("Your browser doesn't support service workers.");

  await navigator.serviceWorker.register("./sw.js", {
    scope: __uv$config.prefix,
  });
}