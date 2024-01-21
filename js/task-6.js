const inputField = document.querySelector('input')
const createButton = document.querySelector('[data-create]')
const destroyButton = document.querySelector('[data-destroy]')
const divContainer = document.querySelector('#boxes')

createButton.addEventListener('click', createBoxes)
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
    createBoxes(totalBoxes);
  }
  let startedSize = 30;
  const step = 10;
  const divContainerArray = [];

  for (let i = 0; i < amount; i++) {
    const createdDiv = document.createElement('div')
    createdDiv.style.backgroundColor = getRandomHexColor()
    createdDiv.style.width = `${startedSize}px`
    createdDiv.style.height = `${startedSize}px`
    divContainerArray.push(createdDiv)
    startedSize += step
  }
  divContainer.append(...divContainerArray)
  // console.log('createBoxes event!', amount);
}

function destroyBoxes(event) {
  divContainer.innerHTML = ''
  // console.log('destroyBoxes event!');
}
