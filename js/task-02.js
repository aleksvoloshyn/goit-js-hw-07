const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfItemEl = document.querySelector('#ingredients');

const arrayOfElementsList = ingredients.map(option => {
  const itemEl = document.createElement('li');
  itemEl.textContent = option;
  return itemEl;
});

listOfItemEl.append(...arrayOfElementsList);
console.log(listOfItemEl);
