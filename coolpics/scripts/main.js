const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const gallery = document.querySelector(".gallery");

function toggleMenu() {
  nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));
}

function handleResize() {
  if (window.innerWidth >= 1000) {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
}

function viewerTemplate(imageUrl, altText) {
  return `
    <div class="viewer-backdrop" id="viewerBackdrop">
      <div class="viewer">
        <button class="viewer-close" id="viewerClose" type="button">X</button>
        <img src="${imageUrl}" alt="${altText}">
      </div>
    </div>
  `;
}

function escClose(e) {
  if (e.key === "Escape") closeViewer();
}

function closeViewer() {
  const backdrop = document.getElementById("viewerBackdrop");
  if (backdrop) backdrop.remove();
  document.removeEventListener("keydown", escClose);
}

function openViewer(img) {
  const fullSrc = img.dataset.full;
  const altText = img.alt;

  document.body.insertAdjacentHTML("beforeend", viewerTemplate(fullSrc, altText));

  const backdrop = document.getElementById("viewerBackdrop");
  const closeBtn = document.getElementById("viewerClose");

  closeBtn.addEventListener("click", closeViewer);

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeViewer();
  });

  document.addEventListener("keydown", escClose);
}

menuBtn.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);

gallery.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (!img) return;
  openViewer(img);
});
