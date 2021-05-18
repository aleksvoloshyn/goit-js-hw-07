const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfItemEl = document.querySelector('#ingredients');

const arOfElements = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients[i];
  arOfElements.push(itemEl);
}

for (let i = 0; i < arOfElements.length; i += 1) {
  listOfItemEl.appendChild(arOfElements[i]);
}

console.log(listOfItemEl);
