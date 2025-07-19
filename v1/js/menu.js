document.addEventListener("DOMContentLoaded", () => {
  const mobile = document.querySelector(".mobile");
  const menu = document.querySelector(".main-nav-menu");

  mobile.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});
