/**
 * - Подія input
 * - Подія blur
 * 
 * Виводь в консоль все, що користувач
 * вводить в input
 */

/* якщо потрібно відслідкувати подію addEventListener
на чекбоксі, на радіокнопках ми слухаємо подію change */

// const checkbox = document.querySelector(".js-checkbox");

// checkbox.addEventListener("change", () => {
//   console.log("ok");
// });

// --------------------------------

/* Було б непогано отримувати актуальні введені
дані користувачем після того, як вних щось змінилося.
При події change на інпуті, вона відпрацьовує лише 
при втраті фокусу. */

// const input = document.querySelector(".js-user-name");
// input.addEventListener("change", handleInput);

// function handleInput() {
//   console.log("ok");
// }

// ----------------

/* Для роботи з інпутами є інша
подія, яка буде наставати під час кожної зміни в нашому
текстовому полі, коли ми щось пишемо або видаляємо,
і вона називається input.

Як отримати значення, яку було введено в текстове поле?
Для того, щоб отримувати дані, які ввів користувач, 
ротрібно у функцію, яку ми передали, як посилання, в 
метод addEventListener передається спеціальний обєкт 
події, який називається event. Щоб отримати доступ до 
символів, які ввів потрібно прописати event.target.value
*/ 

// const input = document.querySelector(".js-user-name");
// input.addEventListener("input", handleInput);

// function handleInput(event) {
//   console.log(input); // посилання на тег input
//   console.log(event.target); // посилання на тег input
//   input === event.target
//   console.log(event.target.value); 
//   // як тільки щось додається або видаляється, отримуються
//   // актуальні дані з текстового поля інпуту 
//   console.log(input.value); 
//   // те саме, що й попередній приклад, тобто
//   // input.value === event.target.value
// }

// --------------------


/**
 * Користувач вводить в input своє імя
 * після втрати фокусу отримує alert з
 * повідомленням-привітанням
 */

/* На текстовому полі можна слухати ще 
декілька потрібних, корисних подій.

Які це події?

1. focus.
подія focus на інпуті відбудеться тоді, коли
я в нього клікну, поставлю туди курсор,
тобто наведу фокус */

// const input = document.querySelector(".js-user-name");
// input.addEventListener("focus", () => {
//   console.log("focus");
// })

/* 
2. blur
Подія blur в інпуті відбудеться тоді, коли інпут
спочатку був у фокусі, а потім з текстового поля 
інпута зникне курсор, тобто нестане фокусу
*/ 

// const input = document.querySelector(".js-user-name");
// input.addEventListener("blur", (event) => {
//   const str = event.target.value;
//   alert(str);
//   // console.log("blur");
// })