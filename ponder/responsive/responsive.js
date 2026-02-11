const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("#primary-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("hide");
  menuBtn.classList.toggle("change");

  const expanded = menuBtn.classList.contains("change");
  menuBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
});
