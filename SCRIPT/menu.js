const menuCelular = document.querySelector(".menuCelular");
const hideMenu = document.querySelector(".hideMenu");
let visivel = false;

menuCelular.addEventListener("click", function (event) {
  event.stopPropagation();

  if (!visivel) {
    hideMenu.style.display = "block";
  } else {
    hideMenu.style.display = "none";
  }
  visivel = !visivel;
});
