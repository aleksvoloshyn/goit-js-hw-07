const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

const onInputElChange = () => {
  //   console.log(inputEl.value);
  spanEl.style.fontSize = inputEl.value + 'px';
};

inputEl.addEventListener('input', onInputElChange);
