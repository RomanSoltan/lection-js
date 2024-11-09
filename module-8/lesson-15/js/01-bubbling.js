/**
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент,
 * на слухачі якого спіймали подію
 */

// /* Отримаємо наші елементи */
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");
// /* На кожен елемент повісимо слухач події */
// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);
// /* Створимо callback функції */
// function  onParentClick() {
//   console.log("onParentClick");
// }
// function  onChildClick() {
//   console.log("onChildClick");
// }
// function  onInnerChildClick() {
//   console.log("onInnerChildClick");
// }

/* Подивимось як буде відбуватися подія.
1. Клікаємо на батьківський елемент parent.
відбулась подія на цьому елементі і в консолі
побачили onParentClick.
2. Клікаємо на елемент сhild і повинна відпрацювати
функція onChildClick. Клікаємо. Що ми бачимо в консолі?
Відпрацювала функція onChildClick і після цього
відпрацювала функція onParentClick. Оскільки на 
батьківському елементі ми так само слухаємо подію
click, ми її зловимо і на батьківському елементі.
3. Клікаємо на inner-child. Відпрацьовує на inner-child
подія click. Далі функція click спливає і проходить
через всі баьківські елементи, які слухають ту саму подію.
Оскільки батьківський до  inner-child є child, він так 
само слухає подію click вона відпрацює і на ньому і ми 
в консолі бачимо onChildClick. Далі подія click також
спливає і відпрацьовує функція onParentClick.

Висновок. 
Якщо у нас вкладена структура елементів і ми клікнули
на цільовому елементі у межах цієї вкладеості, то 
подія відбудеться на ньому, і якщо подія клік 
слухається на інших батьківських елементах-
предках, то ця подія також відбудеться і відпрацює  
callback функція. 

Тобто якщо вкладене, то подія пройде через всі 
батьківські елементи, тобто буде спливати.

Якщо клікнути на вкладеий елемент, то подію клік
зможемо зловити на будь-якому з батьківських
*/

// ------------

// /* Отримаємо наші елементи */
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// /* На кожен елемент повісимо слухач події */
// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);

// /* Створимо callback функції */
// function  onParentClick(event) {
//   console.log("onParentClick target", event.target);
//   console.log("onParentClick currentTarget", event.currentTarget);
// }
// function  onChildClick(event) {
//   console.log("onChildClick target", event.target);
//   console.log("onChildClick currentTarget", event.currentTarget);
// }
// function  onInnerChildClick(event) {
//   console.log("onInnerChildClick target", event.target);
//   console.log("onInnerChildClick currentTarget", event.currentTarget);
// }

/* Оскільки всі ці три функції передюnься, як коллбек 
у слухач події, то це означає, що вони будуть приймати
як параметр event - обєкт події. У цього обєкта є такі
властивості як target i currentTarget. Подивимося 
на різницю між ними.

1. Почнемо з parent. Клікнемо по ньому.
У властивості target знаходиться посилання на div#parent
У властивості currentTarget знаходиться посилання на div#parent

2. Клікнемо по child.
У функції onChildClick 
  -у властивості target знаходиться посилання на div#child
  -у властивості currentTarget - на div#child

А що ми зловили, коли наша подія спливла до 
батьківського елемента? До onParentClick?
У функції onParentClick
  - у властивості target знаходиться посилання на div#child
  - У властивості currentTarget знаходиться посилання на div#parent
  
3. Клікнемо по inner-child.
Спочатку відпрацювла подія клік і відпрацювала функція
onInnerChildClick.
  -у властивості target знаходиться посилання на div#inner-child
  -у властивості currentTarget - на div#inner-child

Потім функція onChildClick
  -у властивості target знаходиться посилання на div#inner-child
  -у властивості currentTarget - на div#child

Потім функція onParentClick
  -у властивості target знаходиться посилання на div#inner-child
  -у властивості currentTarget - на div#parent

Висновки:
1. У властивості target знаходиться посилання на елемент,
на якому відбулася подія. Тобто елемент, по якому ми
безпосередньо клікнули.
2. У властивості currentTarget зберігається посилання на
елемент, на якому ми впіймали цю подію. Тобто елемент, на якому
висить слухач події addEventListener.
 */

// ------------------------

// Припинення спливання події

// /* Отримаємо наші елементи */
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// /* На кожен елемент повісимо слухач події */
// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);

// /* Створимо callback функції */
// function  onParentClick(event) {
//   console.log("onParentClick target", event.target);
//   console.log("onParentClick currentTarget", event.currentTarget);
// }
// function  onChildClick(event) {
//   console.log("onChildClick target", event.target);
//   console.log("onChildClick currentTarget", event.currentTarget);
// }
// function  onInnerChildClick(event) {
//   event.stopPropagation();
//   console.log("onInnerChildClick target", event.target);
//   console.log("onInnerChildClick currentTarget", event.currentTarget);
// }

/* Можна припинити спливання події. Для цього є
спеціальний метод stopPropagation(). Він викликається
з обєкта події event. Як це відбувається?

1. У функції onInnerChildClick звертаємось до
обєкта події event і викликаємо метод stopPropagation.
2. Клікаємо на елемент div#inner-child і подія клік
відбулася лише на ньому. Далі, по елементах вкладеності
вона не пішла спливати. Тобто в інших функціях ми її
не спіймаємо, за рахунок того, що ми викликали метод
event.stopPropagation();
3. Тобто, цей метод припиняє спливання нашої події, саме
по виконанню функції, де цей метод був викликаний
*/

// --------

// Інший метод, схожий на попередній 

// /* Отримаємо наші елементи */
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const innerChild = document.querySelector("#inner-child");

// /* На кожен елемент повісимо слухач події */
// parent.addEventListener("click", onParentClick);
// child.addEventListener("click", onChildClick);
// innerChild.addEventListener("click", onInnerChildClick);
// innerChild.addEventListener("click", foo);

// /* Створимо callback функції */
// function  onParentClick(event) {
//   console.log("onParentClick target", event.target);
//   console.log("onParentClick currentTarget", event.currentTarget);
// }
// function  onChildClick(event) {
//   console.log("onChildClick target", event.target);
//   console.log("onChildClick currentTarget", event.currentTarget);
// }
// function  onInnerChildClick(event) {
//   event.stopImmadiatePropagation();
//   console.log("onInnerChildClick target", event.target);
//   console.log("onInnerChildClick currentTarget", event.currentTarget);
// }
// function foo() {
//   console.log("foo");
  
// }

/*
Методи дуже схожі. Подивимось на різницю між ними.

1. Повісимо на innerChild ще один слухач події клік,
але функцію назвемо foo. Клікнемо по innerChild, 
подія не вспливає далі, але спрацьовує на
onInnerChildClick і на foo.
2. Маємо ще один метод, яки називається
stopImamdiatePropagation()
3. Цей метод, окрім того, що не дає нашій
події спливати, він і припиняє всі інші слухачі 
події на цьому самому елементі.
4. Використовується ніколи
*/


/* */
/** */

// -------------------

// Розбір запитання

// function createMarkup(arr) {
//   return arr
//     .map(
//       ([preview, original, description]) => `
//     <li class="gallery-item">
//       <a class="gallery-link" href="${original}">
//         <img
//           class="gallery-image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//       </a>
//     </li>
//   `
//     )
//     .join("");
// }

// -------------------------
