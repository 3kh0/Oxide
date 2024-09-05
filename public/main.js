const form = document.getElementById("form");
form.addEventListener("keydown", async function (e) {
  if (e.key == "Enter" && chemical.loaded && e.target.value) {
    let input = e.target.value;
    try {
      new URL(input);
    } catch (_) {
      // search it
      input = 'https://duckduckgo.com/?q=' + encodeURIComponent(input);
    }
    window.location = await chemical.encode(input);
  }
});