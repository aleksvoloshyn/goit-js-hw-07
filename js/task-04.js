let counterValue = document.querySelector('#value');

const decrement = () => {
  return (counterValue.textContent -= 1);
};

const increment = () => {
  return (counterValue.textContent = +counterValue.textContent + 1);
};

const but = document.querySelectorAll('button');

const decrementBtn = but[0];
const incrementBtn = but[1];

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
