const collapsibles = document.querySelectorAll(".collapsible");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav--open");
  hamburger.classList.toggle("hamburger--open");
});
