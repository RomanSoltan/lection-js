/**
 * Деструктуризація обєкта в параметрах функції
 */

/*
Подивимось на абсолютно те саме, 
але в розрізі функції.
Як це буде виглядати, якщо ми
будемо працювати з функцією?
*/
// const user = {
//   name: "Alice",
//   skills: {
//     html: true,
//     css: false,
//     js: true
//   }
// }
// Без деструктуризації

// function getUserInfo(obj) {
//   console.log(`Hello, my name is ${obj.name}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js - ${obj.skills.js}.`);
// }

// getUserInfo(user);

// З деструктуризацією

/*
У параметрах також можна деструктуризувати обєкт
за такими самими правилами.
Якщо потрібно деструктуризувати обєкт у параметрах
ставимо літерал обєкту і побігли по його властивостях,
якщо є властивість, в якій зберігається обєкт, то
ставимо : потім літерал обєкту і так само пишемо
назву змінних, які співпадають з ключами обєкту.
Якщо ми деструктуризували властивість, то до неї 
вже не можна звернутися, буде помилка, тому що 
ми з неї все вже повитягали
*/
// function getUserInfo({ name, skills: { html, css, js } }) {
//   // console.log(skills); // Uncaught ReferenceError
//   console.log(`Hello, my name is ${name}, I know html - ${html}, css - ${css} and js - ${js}.`);
// }

// getUserInfo(user);

// ------------------

// Розбір прикладу з кахуту

// function foo(params = {}) {
//   console.log(params);
// }

// foo({ name: "Jacob" }); // { name: "Jacob" }
// // foo(); // {}
// // foo(); // undefined, якщо в параметрі 
// //       //немає значення за замовчуваням