const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfItemEl = document.querySelector('#ingredients');

const ar = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredients[i];
  ar.push(itemEl);
}

for (let i = 0; i < ar.length; i += 1) {
  listOfItemEl.appendChild(ar[i]);
}

console.log(listOfItemEl);
