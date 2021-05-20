const inputEl = document.querySelector('input');

const divBoxesEl = document.querySelector('#boxes');
const renderButtonEl = document.querySelector('[data-action="render"]');
const destroyButtonEl = document.querySelector('[data-action="destroy"]');

const htmlTemplateEl = `<div>test</div>`;

const createBoxes = amount => {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    divBoxesEl.insertAdjacentHTML('beforeend', htmlTemplateEl);
    divBoxesEl.firstElementChild.classList.add('quoter');
  }
};

const destroyBoxes = () => {
  divBoxesEl.innerHTML = '';
};

renderButtonEl.addEventListener('click', createBoxes);

destroyButtonEl.addEventListener('click', destroyBoxes);
