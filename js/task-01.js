/*Посчитает и выведет в консоль количество 
категорий в ul#categories, то есть элементов li.item*/

const items = document.querySelectorAll('.item');
const itemsQuantity = items.length;

console.log(`В списке ${itemsQuantity} категории`);

/**Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2)
 *  и количество элементов в категории (всех вложенных в него элементов li). */

const labels = document.querySelectorAll('.item h2');
const liQuantity = document.querySelectorAll('.item li');
