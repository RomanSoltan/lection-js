/**
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg
 */

/**
 * Оскільки HTML документ за DOM це обєкт, то
 * до елементів і їх атрибутів на сторінці, можна
 * звертатися, як до властивостей у обєкті через крапку
 * Також можна перезаписувати значення атрибутів
 */

// const imgEl = document.querySelector('.hero__image');

// console.log(imgEl.src);
// // поверне значення атрибута src

// console.log(imgEl.alt);
// // поверне значення атрибута alt

// imgEl.src =
//   'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';

// imgEl.alt = 'This is the way';
// console.log(imgEl.alt); // This is the way
// перезаписало значеня атрибута alt

// const obj = {
//   // https://obj/1
//   a: 5,
//   b: 10,
// };

// obj.a = 100;
// console.log(obj);

// --------------------------------------

/* Як можна змінити контент, який наповнює елемент, 
тобто текст, написаний всередині тегу? 

Для цього використовують властивість textContent, яка
повертає текстовий вміст елемента*/

// const heroTitle = document.querySelector('.hero__title');
// console.log(heroTitle.textContent); // About me

// heroTitle.textContent = 'This is the way';
// console.log(heroTitle.textContent); // This is the way

// ===============================================

/**
 * Атрибути
 * - get(імя-атрибута)
 * - set(імя-атрибута)
 * - remove(імя-атрибута)
 * - has(імя-атрибута)
 */

const imgEl = document.querySelector('.hero__image');
imgEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imgEl.alt = 'This is the way';

// console.log(imgEl.src);
// console.log(imgEl.getAttribute('src'));
// // повертає значеня атрибута src

// --------------

// imgEl.setAttribute(
//   'src',
//   'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480',
// ); // метод перезапише значення атрибута

// imgEl.setAttribute('width', 380);

// -----------

// imgEl.removeAttribute('alt');
// // метод видалить атрибут
// console.log(imgEl);

// ----------------

// console.log(imgEl.hasAttribute('alt')); // true
// console.log(imgEl.hasAttribute('href')); // false

// =====================

/**
 * Data-атрибути
 */

/* Виникають ситуації, коли недостатньо 
стандартних атрибутів. Порібні власні атрибути, 
які потрібні, щоб ідентифікувати елемент.
В цьому допоможуть Data-атрибути. Їх можна 
задавати на елементі в розмітці.
Вони записуються data-назва_атрибута="значення"
Data-атрибути виключно для розробників, HTML вони
не потрібні.*/

// Як з цими атрибутами взаємодіяти?

/* Для того, щоб отримати data-атрибути в кнопці 
існує спеціальна властивість dataset, після цього 
звертаємося до назви атрибуту, який потрібно отримати.
В результаті отримаємо значення, яке зберігалося в атрибуті */

// const actions = document.querySelectorAll('.actions button');

// console.log(actions[2].dataset.action); // edit

// ---------

// actions[2].dataset.action = 'new way';
// // перезаписало значення атрибуту
// console.log(actions[2].dataset.action); // new way

// ------------

// створення нового дата-атрибуту
// actions[2].dataset.btn = 'red';

// -------------

// видалення дата-атрибуту
// delete actions[2].dataset.btn;
