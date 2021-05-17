/*Посчитает и выведет в консоль количество 
категорий в ul#categories, то есть элементов li.item*/

const items = document.querySelectorAll('.item');
const itemsQuantity = items.length;

console.log(`В списке ${itemsQuantity} категории`);
