async function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");

    for (const el of elements) {
        const file = el.getAttribute("data-include");
        // Append a timestamp so the browser never serves a cached partial
        const res = await fetch(file + "?v=" + Date.now());
        el.innerHTML = await res.text();
    }
    document.dispatchEvent(new Event('htmlIncluded'));
}

document.addEventListener("DOMContentLoaded", includeHTML);