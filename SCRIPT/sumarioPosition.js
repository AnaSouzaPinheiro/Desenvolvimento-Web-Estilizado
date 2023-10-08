var sumDiv = document.querySelector(".sum");
var sumario = document.querySelector(".sumario");
var article = document.querySelector(".article");
var content = document.querySelector(".content");

function handleScroll() {
  var image = document.querySelector(".image");
  var imageRect = image.getBoundingClientRect();

  var screenWidth = window.innerWidth;

  if (screenWidth > 768) {
    sumario.style.height = "537px";

    if (imageRect.bottom <= 0) {
      sumDiv.style.position = "fixed";
      sumDiv.style.top = "0";
      sumDiv.style.flexWrap = "wrap";
      sumario.style.margin = "0 50px";

      var computedStyle = window.getComputedStyle(sumDiv);
      if (
        computedStyle.getPropertyValue("position") === "fixed" &&
        screenWidth > 768
      ) {
        article.style.marginLeft = "400px";
      }
    } else {
      sumDiv.style.position = "static"; 
      sumDiv.style.flexWrap = "inherit";
      sumario.style.margin = "50px";
      article.style.marginLeft = "0";
      content.style.display = "flex";
    }
  } else {
    content.style.display = "block";
    sumDiv.style.position = "static";
    sumDiv.style.display = "flex";
    sumDiv.style.justifyContent = "center";
    article.style.margin = "0";
    sumario.style.margin = "50px 50px 0 50px";
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();
