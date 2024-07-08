// service worker
const stockSW = "/uv/sw.js";

// hostnames to use workers without https
const swAllowedHostnames = ["localhost", "127.0.0.1"];
// global util
async function registerSW() {
  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

  await navigator.serviceWorker.register(stockSW);

  // Register the EpoxyClient transport to be used for network requests
  let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";
  await BareMux.SetTransport("EpxMod.EpoxyClient", { wisp: wispUrl });
}
