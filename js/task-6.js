function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumberElem = document.querySelector('#controls input');
const buttonCreateElem = document.querySelector(
  '#controls button[data-create]',
);
const buttonDestroyElem = document.querySelector(
  '#controls button[data-destroy]',
);
const boxesElem = document.querySelector('#boxes');

function createBoxes(amount) {
  destroyBoxes();
  let setBoxes = '';

  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    setBoxes += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}></div>`;
  }
  boxesElem.insertAdjacentHTML('beforeend', setBoxes);
}

function destroyBoxes() {
  boxesElem.innerHTML = '';
}

buttonCreateElem.addEventListener('click', () => {
  const amount = inputNumberElem.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumberElem.value = '';
  }
});

buttonDestroyElem.addEventListener('click', destroyBoxes);
