let counterValue = document.querySelector('#value');

const onDecrementButtonClick = () => {
  return (counterValue.textContent -= 1);
};

const onIncrementButtonClick = () => {
  return (counterValue.textContent = +counterValue.textContent + 1);
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementButtonClick);
incrementBtn.addEventListener('click', onIncrementButtonClick);
