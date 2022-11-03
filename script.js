window.onload = () => {
  const iconMenu = document.querySelector("#icon-menu");
  const navLinks = document.querySelector("#nav-links");
  const triangle = document.querySelector("#triangle");

  iconMenu.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
    triangle.classList.toggle("hidden");
  });
};
