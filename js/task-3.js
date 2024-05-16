const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', event => {
  const currentInput = event.currentTarget.value.trim();
  if (currentInput === '') {
    return (output.textContent = 'Anonymous');
  }
  return (output.textContent = currentInput);
});
