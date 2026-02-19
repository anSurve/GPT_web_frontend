async function includeHTML() {
    const elements = document.querySelectorAll("[data-include]");

    for (const el of elements) {
        const file = el.getAttribute("data-include");
        const res = await fetch(file);
        el.innerHTML = await res.text();
    }
    document.dispatchEvent(new Event('htmlIncluded'));
}

document.addEventListener("DOMContentLoaded", includeHTML);