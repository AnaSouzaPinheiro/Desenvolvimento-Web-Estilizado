const sumDiv = document.querySelector(".sum");
const sumario = document.querySelector(".sumario");
const article = document.querySelector(".article");
const content = document.querySelector(".content");
const image = document.querySelector(".image");

function handleScroll() {
  const imageRect = image.getBoundingClientRect();
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    content.style.display = "flex";
    sumario.style.height = "537px";

    if (imageRect.bottom <= 0) {
      sumDiv.style.position = "fixed";
      sumDiv.style.top = "0";
      sumDiv.style.display = "block";

      const computedStyle = window.getComputedStyle(sumDiv);
      if (computedStyle.getPropertyValue("position") === "fixed") {
        article.style.marginLeft = "415px";
      }
    } else {
      sumDiv.style.position = "static";
      article.style.marginLeft = "0";
    }
  } else {
    if (screenWidth < 768) {
      sumDiv.style.position = "static";
      article.style.marginLeft = "0";
      content.style.display = "block";
      sumDiv.style.display = "flex";
    }
  }
}

window.addEventListener("scroll", handleScroll);

handleScroll();
