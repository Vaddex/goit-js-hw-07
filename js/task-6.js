const inputField = document.querySelector('input')
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const divContainer = document.querySelector('#boxes')

createButton.addEventListener('click', () => {
  const totalBoxes = Number(inputField.value);
  if (totalBoxes >= 1 && totalBoxes <= 100) {
    inputField.value = '';
    createBoxes(totalBoxes);
  }
});
destroyButton.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes()
  const totalBoxes = Number(inputField.value)
  
  if (totalBoxes >= 1 && totalBoxes <= 100) {
    inputField.value = ''
  }
  let startSize = 30;
  const sizeIncrement = 10;
  const divContainerArray = [];

  for (let i = 0; i < amount; i++) {
    const createdDiv = document.createElement('div')
    createdDiv.style.backgroundColor = getRandomHexColor()
    createdDiv.style.width = `${startSize}px`
    createdDiv.style.height = `${startSize}px`
    divContainerArray.push(createdDiv)
    startSize += sizeIncrement
  }
  divContainer.append(...divContainerArray)
}

function destroyBoxes() {
  divContainer.innerHTML = ''
}
