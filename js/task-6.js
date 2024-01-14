const controls = document.querySelector('#controls')
const boxes = document.querySelector('#button')

const amount = controls.children.item(0)
// const create = controls.children.item(1)
// const destroy = controls.children.item(2)

controls.children.item(1).addEventListener('click', createBoxes)
controls.children.item(2).addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  return `
  <div class="boxBackColor">
  lol
  </div>
  `
}

boxes.insertAdjacentHTML('afterbegin', createBoxes)

function destroyBoxes() {
  return console.log(amount.value = '');

}
// console.dir(controls)
// console.log(amount);
// console.dir(amount)
// console.log(create);
// console.log(destroy);
