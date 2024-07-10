const form = document.getElementById("uv-form");
const address = document.getElementById("uv-address");
const searchEngine = document.getElementById("uv-search-engine");
const error = document.getElementById("uv-error");
const errorCode = document.getElementById("uv-error-code");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (window.chemicalLoaded) {
        const url = search(address.value, searchEngine.value);

        let frame = document.getElementById("uv-frame");
        frame.style.display = "block";
        frame.src = await window.chemicalEncode(url);
    }
});