document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".main-nav-menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
