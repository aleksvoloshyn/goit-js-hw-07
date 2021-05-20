const inputEl = document.querySelector('#name-input');
let spanEl = document.querySelector('#name-output');

const onInputElInput = () => {
  spanEl.textContent = inputEl.value;
  if (inputEl.value === '' || inputEl.value.trim(' ') === '') {
    spanEl.textContent = 'незнакомец';
  }
};

inputEl.addEventListener('input', onInputElInput);
