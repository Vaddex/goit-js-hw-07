function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyContainer = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const hexColor = getRandomHexColor();
  bodyContainer.style.backgroundColor = hexColor;
  colorSpan.textContent = hexColor;
}