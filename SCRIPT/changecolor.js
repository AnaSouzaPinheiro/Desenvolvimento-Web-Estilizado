function changeColor(sectionId) {
const section = document.getElementById(sectionId);
  section.style.color = "#00c0c0";

  setTimeout(function () {
    section.style.color = "";
  }, 1000);
}
