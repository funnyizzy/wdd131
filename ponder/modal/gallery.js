const gallery = document.querySelector(".gallery");
const modal = document.querySelector("dialog");
const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector(".close-viewer");

gallery.addEventListener("click", openModal);

function openModal(e) {
  const img = e.target.closest("img");
  if (!img) return;
  modalImage.src = img.src.replace("-sm", "-full");
  modalImage.alt = img.alt;
  modal.showModal();
}

closeButton.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.close();
  }
});
