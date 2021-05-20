const inputEl = document.querySelector('#validation-input');
console.log('🚀 ~ inputEl', inputEl.dataset.length);

const onInputChange = () => {
  if (inputEl.value.length === +inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
};

inputEl.addEventListener('blur', onInputChange);
