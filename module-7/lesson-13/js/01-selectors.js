/**
 * Пошук HTML з допомогою querySelector
 * та querySelectorAll
 * - З назвою тегу
 * - За назвою класу
 * - За ID
 */

/* 
Як можна отримувати елементи з HTML сторінки?
*/

/* Отримання кнопки за допомогою DOM.

Для того, щоб отримати елемент з HTML звертаємося 
до document крапка і викликаємо метод querySelector(),
де аргументом рядок виступає селектор елемента, який 
потрібно отримати. 
Селектор може бути, як 
  - тег ("button")
  - клас (".buttom")
  - ID ("#button")

querySelector() поверне посилання на перший знайдений 
елемент з таким селектором (якщо елементів декілька). 

Як результат отримано посилання на кнопку
*/

// const magicBtnID = document.querySelector('#magic-btn');
// const magicBtnClass = document.querySelector('.magic-btn');
// const magicBtnTag = document.querySelector('button');
// console.log(magicBtnTag); // посилання на кнопку

// ----------

// const navEl = document.querySelector('.site-nav');
// console.log(navEl); // посилання на список

// -----------

// const ulEl = document.querySelector('ul');
// console.log(ulEl); // посилання на список

// const navItem = document.querySelector('.site-nav__link');
// console.log(navItem);
// // поверне посилання на перший знайдений елемент списку

// querySelector() поверне посилання на перший знайдений
// елемент з таким селектором (якщо елементів декілька).

// ----------------------------

/*
Як отримати всі елементи за відповідним класом?

Для цього існує метод querySelectorAll(), який отримує
всі елементи і складає їх у псевдомасив. 
*/

// const navLinkEl = document.querySelectorAll('.site-nav__link');
// console.log(Array.isArray(navLinkEl)); // false
// console.log(navLinkEl); // повертає псевдомасив елементів

// -----------

/* Інші методи на не дуже свіжих форумах */

// const btn = document.getElementById('magic-btn');
// console.log(btn); // посилання на кнопку

// -----------

// Те саме, що querySelectorAll
// const btn = document.getElementsByClassName('site-nav__link');
// console.log(btn); // повертає псевдомасив елементів

// =====================================================

/**
 * Властивості "навігації" по DOM-вузлах
 */

/* Можна робити навігацію безпосередньо по цьому 
елементу за допомогою певних властивостей */

// const navEl = document.querySelector('.site-nav');
// const firstEl = navEl.firstChild;
// console.log(firstEl); // отримано текстову ноду

/* Текстова нода - це ентери і пробіли, які поставлені в HTML
коді між елементами, для кращої читабельності коду */

// ------------------------

/* firstElementChild поверне перший дочірній елемент */

// const navEl = document.querySelector('.site-nav');
// const firstEl = navEl.firstElementChild;
// console.log(firstEl); // посилання на перший елемент списку

// console.log(navEl.lastElementChild);
// // посилання на останній елемент списку

// console.log(navEl.childNodes);
// // повертає псевдомасив, у якому весь список,
// // враховуючи і елементи, і текстові ноди.

// console.log(navEl.children);
// // поверне список усіх дочірніх елементів батьківського

// const portfolioEl = navEl.children[1];
// console.log(portfolioEl);
// поверне посилання на елемент псевдомасиву
// navEl.children під індексом 1

// const portfolioEl = navEl.children[1];
// console.log(portfolioEl.previousElementSibling);
// // повертає посилання на попередній елемент,
// // який стоїть перед portfolioEl, тобто перед тим,
// // який викликав властивість previousElementSibling.

// const portfolioEl = navEl.children[1];
// console.log(portfolioEl.nextElementSibling);
// // повертає посилання на наступний сусідній елемент,
// // який стоїть після portfolioEl, тобто після того,
// // який викликав властивість previousElementSibling.
