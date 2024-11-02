/**
 * Створення та додавання елементів
 */

/**
 * Створюємо заголовок
 */

// Метод createElement()

// // створюємо елемент
// const titleEl = document.createElement("h1");
// titleEl.classList.add("page-title");
// titleEl.textContent = "Title";

// // додаємо елемент на сторінку в body
// document.body.append(titleEl);

// console.log(titleEl);

/* Для того, щоб додати всередину тегу якийсь елемент
використовується метод  prepend або append. 
prepend - перед усіма дочірніми елементами,
append - після усіх дочірніх елементів*/


// ------------------------

/**
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */

// const imgEl = document.createElement("img");
// imgEl.src = "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg";
// imgEl.alt = "valais-alpine-mountains-glacier";
// imgEl.width = 320;
// document.body.append(imgEl); // додаємо посилання на imgEl

// const heroEl = document.querySelector(".hero");
// heroEl.append(titleEl, imgEl)
// console.log(heroEl);

/* 
ЕЛЕМЕНТИ МОЖУТЬ БУТИ ДОДАНІ (ВИКОРИСТАНІ) 
НА СТОРІНКУ ЛИШЕ ОДИН РАЗ.
Неможливо додати один і той самий елемент двічі
додати на сторінку. Якщо додаєш елемент другий раз,
то він видаляється з попереднього місця і переміщується 
в місце, де він був доданий останній раз. */

/**
 * Створюємо та додаємо новий пункт меню
 */

// // створюємо елемент li і додаємо клас
// const navItemEl = document.createElement("li");
// navItemEl.classList.add("site-nav__item");

// // Створюємо елемент а, додаємо атрибут, клас,
// // контент і вкладаємо в тег li
// const navLinkEl = document.createElement("a");
// navLinkEl.href = "/profile";
// navLinkEl.classList.add("site-nav__link");
// navLinkEl.textContent = "Profile";
// navItemEl.append(navLinkEl);

// // вкладаємо тег li в наш список
// const navEl = document.querySelector(".site-nav");
// navEl.append(navItemEl);

// console.log(navEl);


// Демонстрація того, що елемент можебути доданий
// лише один раз в одне місце на сайті.
// before додає елементи, за його межами перед navEl.

// navEl.before(navItemEl, navEl.firstElementChild);

/* 
1. якщо створюєте елементи з допомогою методу 
createElement, то всередину вони додаються за 
допомогою методу append або prepend

2. якщо ви ці елементи створюєте як рядок, то
всередину вони додаються за допомогою методу
insertAdjacementHTML або зп допомогою
властивості innerHTML
*/

