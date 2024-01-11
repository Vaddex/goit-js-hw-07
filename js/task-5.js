function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyContainer = document.querySelector("body");
const btnColorChanger = document.querySelector(".change-color");
const spanValue = document.querySelector(".color");

btnColorChanger.addEventListener("click", changeBodyColor);
function changeBodyColor() {
  const changeColor = getRandomHexColor();
  bodyContainer.style.backgroundColor = `${changeColor}`;
  spanValue.textContent = `${bodyContainer.style.backgroundColor}`;
}
