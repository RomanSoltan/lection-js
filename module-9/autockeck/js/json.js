// Стандарт JSON  (JavaScript Object Notation)

/* JSON (JavaScript Object Notation) — сучасний
текстовий формат зберігання й передачі структурованих
даних у текстовій формі. Саме в цьому форматі дані 
будуть приходити і відправлятися на сервер, 
зберігатися в локальному сховищі тощо. */ 

//  У JSON зберігаються числа, рядки, 
// масиви, а також спеціальне значення null.

// {
//   "name": "Josh",
//   "weight": 175,
//   "age": 30,
//   "eyecolor": "brown",
//   "isHappy": true,
//   "cars": ["Chevy", "Honda"],
//   "favoriteBook": {
//     "title": "The Last Kingdom",
//     "author": "Bernard Cornwell",
//     "rating": 8.38
//   }
// }

// ====================

// Перетворення у json

/* Метод JSON.stringify(value) приймає значення
і перетворює його у JSON. Значенням може бути 
число, буль, null, масив, об'єкт.  */

// JSON.stringify(value) - метод приводить дані до формату JSON

// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json);
// // {"name":"Mango","age":3,"isGoodBoy":true}

// console.log(JSON.stringify(32)); // "32"
// console.log(JSON.stringify(true)); // "true"

// ------------------------

// Перетворення функцій

/* 
Не всі JavaScript об'єкти можуть бути перетворені
один в один у JSON. Наприклад, якщо в об'єкта є 
методи, то при перетворенні вони будуть 
проігноровані та не потраплять у JSON.
*/ 

// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
//   bark() {
//     console.log("Woof!");
//   },
// };

// const json = JSON.stringify(dog);
// console.log(json);
// // '{"name":"Mango","age":3,"isGoodBoy":true}' - рядок

// ---

/* 
Також при спробі перетворити функцію у JSON
результатом буде undefined.
*/ 

// const json = JSON.stringify(() => console.log("Well, this is awkward"));
// console.log(json); // undefined

// ======================

// Парсинг із json

/* 
Метод JSON.parse(value) приймає json, тобто рядок,
і перетворює його у JavaScript дані.
*/ 

// console.log(JSON.parse("5")); // 5
// console.log(JSON.parse("false")); // false
// console.log(JSON.parse("null")); // null

/* 
Якщо json описує складний тип даних, наприклад об'єкт,
то в результаті отримаємо валідний об'єкт, з яким 
можна працювати звичайним чином.
*/ 

// const json = '{"name":"Mango","age":"3","isGoodBoy":true}';
// const dog = JSON.parse(json);
// console.log(dog); 
// // {name: 'Mango', age: '3', isGoodBoy: true}
// console.log(dog.name); // "Mango"

// ===================

// Обробка помилок

/* Якщо методу JSON.parse передати невалідний JSON,
він згенерує помилку. Як результат, увесь скрипт 
впаде, тобто припинить своє виконання, і весь код
після місця помилки не виконається. 
*/

// const data = JSON.parse("Well, this is awkward"); 
// // Uncaught SyntaxError
// console.log("❌ You won't see this log"); 

// const data = JSON.parse('{username: "Mango"}'); // Uncaught SyntaxError
// console.log("❌ You won't see this log");

// ==========

// Рішення

/* 
Для уникнення цього використовується конструкція
try...catch, яка дозволяє «ловити» й обробляти 
помилки виконання скрипта.
*/ 

// try {
//   // Code that may throw a runtime error
// } catch (error) {
//   // Error handling
// }

/*
1. Спочатку виконується код всередині
блоку try
2. Якщо помилки відсутні, блок catch 
ігнорується і управління передається далі.
3. Якщо в блоці try сталася помилка, його 
виконання зупиняється та інтерпретатор
переходить до блоку catch. 
*/ 

/* Використовуючи конструкцію try...catch, 
можна обробити цей виняток таким чином, щоб 
скрипт за межами цієї конструкції продовжив 
працювати, навіть у разі помилки. */ 

// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); 
//   // "Unexpected token 'W', "Well, this"... is not valid JSON"
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");

/* 
Змінна error — це об'єкт помилки з 
інформацією про те, що сталося.

У цього об'єкта є кілька корисних властивостей:

name — тип помилки. Для помилки парсингу — це SyntaxError.
message — повідомлення про деталі помилки.
stack — стек викликів функцій на момент помилки. 
Використовується для налагодження.
*/ 

// localStorage.clear();

// =========================


