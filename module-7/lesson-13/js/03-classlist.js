/**
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */


// const navLinkEl = 
//   document.querySelector('.site-nav__link[href="/contact"]');
// console.log(navLinkEl);
// поверне посилання на лінк з атрибутом
// href="/contact" і класом site-nav__link


// const currentPageUrl = '/contact';
// const navLinkEl = 
//   document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// console.log(navLinkEl);
// поверне посилання на лінк з атрибутом
// href="/contact" і класом site-nav__link

// ------------------
// Додавання класу

// const currentPageUrl = '/contact';
// const navLinkEl = 
//   document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

// navLinkEl.classList.add("site-nav__link--current");
// console.log(navLinkEl); 
// // доданий новий клас site-nav__link--current
// // до елемента navLinkEl.

// можна додавати і декілька через кому
/* На відміну від запису, який використовується в
querySelector крапка і назва класу, у методі add
крапка перед класом не потрібна
 */ 

// ------------------------

// Видалення класу

// const currentPageUrl = '/contact';
// const navLinkEl = 
//   document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// navLinkEl.classList.add("site-nav__link--current");

// navLinkEl.classList.remove("site-nav__link--current");
// console.log(navLinkEl); 
// // видалено клас site-nav__link--current в 
// // елемента navLinkEl

// ----------------

// Метод toggle

/* Метод toggle робить наступне
  - якщо в елемента вже є такий клас, 
то метод toggle його видалить;
  - якщо немає, то додасть в кінець списку класів */ 

// const currentPageUrl = '/contact';
// const navLinkEl = 
//   document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// navLinkEl.classList.add("site-nav__link--current");

// navLinkEl.classList.toggle("site-nav__link--current");
// console.log(navLinkEl); 
// // Видалено клас site-nav__link--current в 
// // елемента navLinkEl

// ------------------

// Заміна класу на новий. метод replace()

/* Метод replace() замінює один клас на інший.
Цей метод приймає в себе два аргументи
  1. клас, який потрібно замінити
  2. клас, який потрібно поставити на його місце */ 

// const currentPageUrl = '/contact';
// const navLinkEl = 
//   document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// navLinkEl.classList.add("site-nav__link--current");

// navLinkEl.classList.replace("site-nav__link--current", "blue");
// console.log(navLinkEl); 
// новий клас blue замінив клас 
// site-nav__link--current в елементі navLinkEl

// -----------------------

// Метод contains()

/* Цей метод перевіряє чи є в елемента
певний клас. Повертає true або false */ 

// const currentPageUrl = '/contact';
// const navLinkEl = 
//   document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);
// navLinkEl.classList.add("site-nav__link--current");

// console.log(navLinkEl.classList.contains("site-nav__link--current")); 
// // поверне true