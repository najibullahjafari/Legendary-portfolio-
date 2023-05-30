// FOR POPUP MENU

const hiddenMenu = document.querySelector(".hidden-menu");
const hamburguer = document.querySelector("#hamburguer-menu");
const colseTag = document.querySelector(".cancel-img");
const portfolioItem = document.querySelectorAll(".hidden-item");

hamburguer.addEventListener("click", function () {
  hiddenMenu.style.display = "block";
});
colseTag.addEventListener("click", function () {
  hiddenMenu.style.display = "none";
});
portfolioItem.forEach((element) => {
  element.addEventListener("click", () => {
    hiddenMenu.style.display = "none";
  });
});

