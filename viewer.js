const params = new URLSearchParams(window.location.search);
const file = params.get("file");

if (!file) {
  document.body.innerHTML = "No task selected";
} else {
  fetch(file)
    .then(res => res.text())
    .then(text => {
      const xml = new DOMParser().parseFromString(text, "text/xml");

      document.getElementById("title").textContent =
        xml.querySelector("title")?.textContent || "";

      document.getElementById("description").textContent =
        xml.querySelector("description")?.textContent || "";

      document.getElementById("due").textContent =
        xml.querySelector("due")?.textContent || "";
    })
    .catch(() => {
      document.body.innerHTML = "Failed to load task";
    });
}
