// about blank
let cfgBlank = document.getElementById("cfgBlank");

cfgBlank.addEventListener("click", function () {
  var win = window.open();
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  var frm = win.document.createElement("iframe");
  frm.style.border = "none";
  frm.style.width = "100%";
  frm.style.height = "100%";
  frm.style.margin = "0";
  frm.referrerpolicy = "no-referrer";
  frm.allow = "fullscreen";
  frm.src = window.location.href;
  win.document.body.appendChild(frm);
});

// tab cloak
let cfgCloak = document.getElementById("cfgCloak");
let tabTitle = localStorage.getItem("cfgTabTitle");
let tabIcon = localStorage.getItem("tabIcon");

if (tabIcon) {
  document.querySelector('link[rel="icon"]').href = tabIcon;
}
if (tabTitle) {
  document.title = tabTitle;
}

cfgCloak.addEventListener("click", function () {
  let newTitle = prompt("Set tab title:");
  let newIcon = prompt("Set tab icon:");
  if (newTitle) {
    document.title = newTitle;
    localStorage.setItem("cfgTabTitle", newTitle);
  }
  if (newIcon) {
    document.querySelector('link[rel="icon"]').href = newIcon;
    localStorage.setItem("tabIcon", newIcon);
  }
});

// dark mode
let cfgDarkTog = document.getElementById("cfgDark");
let cfgDark = localStorage.getItem("cfgDark");

if (cfgDark === "true") {
  document.documentElement.style.setProperty("--text-color", "white");
  document.documentElement.style.setProperty("--back-color", "black");
  document.body.classList.add("dark-mode");
  cfgDarkTog.textContent = "Light mode";
}

cfgDarkTog.addEventListener("click", function () {
  cfgDark = localStorage.getItem("cfgDark");
  if (cfgDark !== "true") {
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--back-color", "black");
    localStorage.setItem("cfgDark", "true");
    cfgDarkTog.textContent = "Light mode";
  } else {
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--back-color", "white");
    localStorage.setItem("cfgDark", "false");
    cfgDarkTog.textContent = "Dark mode";
  }
});