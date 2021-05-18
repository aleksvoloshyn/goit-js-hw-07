/*Посчитает и выведет в консоль количество 
категорий в ul#categories, то есть элементов li.item*/

const itemsEl = document.querySelectorAll('.item');
const itemsQuantityEl = itemsEl.length;

console.log(`В списке ${itemsQuantityEl} категории`);

/**Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
 *  и количество элементов в категории (всех вложенных в него элементов li). */

const getCategories = document.querySelectorAll('#categories .item');
const sortedCategories = getCategories.forEach(el => {
  const categoryName = el.querySelector('h2').textContent;
  const liQuantity = el.querySelectorAll('ul li').length;
  console.log(`Категория: ${categoryName}`);
  console.log(`Количество элементов: ${liQuantity}`);
});
