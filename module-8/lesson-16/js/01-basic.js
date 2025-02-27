/**
 * Деструктуризація обєкта
 */

/* За рахунок деструктуризації ми можемо писати
трошки лаконічніше. Буваюь приклади, коли дуже 
велика вкладеність обєкту і це візуально 
забруднює код. Коли дуже часто звертаєшся до 
властвостей обєкта це може збільшити обсяг коду
За рахунок деструктуризації можа цього уникнути
*/
/*
Деструктуризація це синтаксис, який дає можливість
повитягати з обєкта властвості і звертатися до них, 
як до звичайної змінної.

Як це виглядає?
1. Пишемо ключове слово const і ставимо {}, після 
них знак присвоєння = і назву обєкту, який 
деструктуризується.
2. У фігурних дужках створюємо змінні, назва яких
повинна співпадати з ключами обєкта деструктуризації.
Тобто у змінні буде присвоюватися зачення з обєкту
з однойменних ключів.
3. Все готово. Тепер, якщо потрібно звернутися до
властивостей обєкта, то ми можемо просто використати
назву змінної і витягнути властивості з обєкту
 */

// const user = {
//   username: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     js: false
//   }
// }
// // деструктуризація
// const { username, skills } = user;
// console.log(username); // Alice

// ------------------------

/*
Якщо хочемо отримати з обєкта властивість,
якої немає отримаємо undefined.
*/

// const user = {
//   username: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
// };
// // деструктуризація
// const { username, skills, city } = user;

// // спроба отримати властивість, якої нема, з обєкту
// console.log(user.city); // undefined

// // спроба отримати властивість, якої нема,
// // під час деструктурзації з обєкту. Коли в
// // обєкті немає властивості, яку ми деструктуризуємо,
// // то поверне undefined
// console.log(city); // undefined

/* 
Якщо в обєкті немає властивості, яку деструктуризують
в змінну, то в цій змінні буде undefined, щоб цього 
уникнути потрібно задати змінній значення за 
замовчуванням при деструктурзації.
Якщо така властивість є, то в змінну присвоїться 
значення з обєкту
*/
// const { username, skills, city = "Dnipro" } = user;
// console.log(city); // Dnipro

// -----------------

/* Якщо в цій самій обласі видимості є змінна з
такою назвою, то в консолі буде помилка, тому
що неможе бути двох змінних з однаковою назвою. 
*/

// const user = {
//   username: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   city: "Lviv",
// };
// const city = "Kyiv";

// // деструктуризація
// const { username, skills, city = "Dnipro" } = user;
// console.log(city); // SyntaxError

// ----------------

/* В такому випадку можна змінну під час 
деструктуризації перейменувати.
  userCity - Lviv
  city - Kyiv
Також можна задавати значення за 
замовчуванням, яке буде використане, 
тільки тоді коли в обєкті user немає
властивості city.
  */

// const user = {
//   username: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   city: "Lviv",
// };
// const city = "Kyiv";

// // перейменування змінної
// const { username, skills, city: userCity = "Dnipro" } = user;
// console.log(city); // Kyiv
// console.log(userCity); // Lviv

// ------------------

/* 
Якщо в глобальнй області небуде
змінної city, але ми спробуємо отримати
доступ, то буде помилка в консолі, тому що 
такої змінної вже неіснує, ми її перейменували
під час деструктуризації на userCity. Якщо не 
було б перейменування, то все працюватиме.
*/
// const user = {
//   username: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   city: "Lviv",
// };
// // перейменування змінної
// const { username, skills, city: userCity = "Dnipro" } = user;
// console.log(city); // ReferenceError
// console.log(userCity); // Lviv

// --------------------

/*
Є така можливість витягувати з обєкта
тільки ті властивості, які цікавлять.
Тобто якщо інші властивості не потрібні
їх можна не деструктуризувати, але якщо 
потрібні, то їх можна зібрати в один обєкт
з допомогою rest оператора. Він візьме усі
значення, окрім username і складе їх в обєкт.
*/
// const user = {
//   username: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
//   city: "Lviv",
// };

// const { username, ...obj } = user;
// console.log(obj); // {skills: {…}, city: 'Lviv'}

// ===============================

/**
 * Глибока деструктуризація обєкта
 */

/*
Тепер попрацюємо з властивістю skills.
У ній також зберігається обєкт. Можливо
звертатися до ключів у skills напряму.
1. Можна деструктуризувати skills
2. Глибока деструктуризація

Глибока деструктуризація це коли ми
деструктуризували властивість, в якій 
зберігається обєкт, то можна одразу
зробити деструктуризацію його властивостей,
які нас цікавлять.
При глибокій деструктуризація діють ті
самі правила, що і при звичайній.
*/
// const user = {
//   username: "Alice",
//   skills: {
//     html: true,
//     css: true,
//     js: false,
//   },
// };
// // // 1. деструктуризація skills
// // const { html, css, js } = skills;

// // 2. Глибока деструктуризація
// const { skills: { html, css, js } } = user;
// console.log(css); // true

// ===================

/**
 * Деструктуризація масивів
 */

// // Без деструктуризації
// const arr = [10, 11, 12, 13, 14];

// const first = arr[0];
// const second = arr[1];

// console.log(first); // 10
// ------------
/*
В обєкті послідовність змінних при 
деструктуризації не мала значення, 
так як масив індексована сутність
послідовність змінних потрібно
зберігати, вона має значення.

Якщо одну зміну під час деструктуризації
потрібно пропустити потрібно просто замість
змінної поставити кому.

Також можна присвоювати значення за 
замовчуванням, щоб не отримувати undefined
*/
// // З деструктуризацією
// const arr = [10, 11, 12, 13, 14, 15];

// const [ first, , third, fourth = 9, ...newArr ] = arr;
// console.log(first); // 10
// console.log(third); // 12
// console.log(newArr); // [14, 15]