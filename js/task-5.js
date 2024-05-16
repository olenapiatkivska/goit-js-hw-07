function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElem = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');
const spanElem = document.querySelector('.color');

function changeColor() {
  const color = getRandomHexColor();
  bodyElem.style.backgroundColor = color;
  spanElem.textContent = bodyElem.style.backgroundColor;
}

buttonElem.addEventListener('click', changeColor);
