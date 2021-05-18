const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

/**ul галерея */
const galaryEl = document.querySelector('#gallery');

const elements = []; //массив лишек с влож картинками

for (let i = 0; i < images.length; i += 1) {
  const listEl = document.createElement('li');
  const imgEl = document.createElement('img');
  imgEl.src = images[i].url;
  imgEl.alt = images[i].alt;
  listEl.appendChild(imgEl);
  elements.push(listEl);
}

for (let i = 0; i < elements.length; i += 1) {
  galaryEl.appendChild(elements[i]);
}

console.log(galaryEl);
