"use strict";

// // Метод масиву join()
// const words = ["JavaScript", "is", "amazing"];

// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("--"));

// function transformString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }

// console.log(transformString("user_age")); // "user-age"
// console.log(transformString("price_per_droid")); // "price-per-droid";

// function getLength(array) {
//   const stringArray = array.join("");
//   return stringArray.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

// Метод split()

// const name = "Mango";
// const letters = name.split("");
// console.log(letters);

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words);

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts);

// function calculateEngravingPrice(message, pricePerWord) {
//   const array = message.split(" ");
//   return array.length * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// Метод slice(begin, end)

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//   const indexElement = array.indexOf(value);
//   if (array.indexOf(value) >= 0) {
//     return array.slice(0, indexElement + 1);
//   } else {
//     return (array = []);
//   }
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//   let array = [];

//   for (let i = min; i <= max; i++) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(createArrayOfNumbers(14, 17));

// // Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     // console.log(i);

//     sum += order[i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([11, 8, 37, 4])); // 60

// А тепер давай виконаємо цікаву задачу "Парні числа"

// // Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//   let array = [];
//   for (let i = start; i <= end; i++) {
//     if (!(i % 2)) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [[6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []
// console.log(getEvenNumbers(2, 2)); // [2]
// console.log(getEvenNumbers(1, 10)); // [2, 4, 6, 8, 10]
// console.log(getEvenNumbers(1, 0)); // []

// Метод includes()

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   const itemLowerCase = item.toLowerCase();

//   // // if..else

//   // if (storage.includes(itemLowerCase)) {
//   //   return `${itemLowerCase} is available to order!`;
//   // } else {
//   //   return "Sorry! We are out of stock!";
//   // }

//   // // тернарний

//   // return storage.includes(itemLowerCase)
//   //   ? `${itemLowerCase} is available to order!`
//   //   : "Sorry! We are out of stock!";
// }

// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// // "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// // "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// // "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));
// // "Sorry! We are out of stock!"

// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

// function getCommonElements(array1, array2) {
//   let array = [];

//   for (let i = 0; i <= array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       array.push(array1[i]);
//     }
//   }
//   return array;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// // Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (const item of order) {
//     sum += item;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([])); // 0

// // Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4)); //[4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); //[291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176));
// //[176, 63, 94, 371, 412]
// console.log(createReversedArray()); //[]

// // Функція calculateTax(amount, taxRate) оголошує два параметри:

// // amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// // taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// // Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }

// console.log(calculateTax(100, 0.1)); // 10
// console.log(calculateTax(200, 0.1)); // 20
// console.log(calculateTax(100, 0.2)); // 20
// console.log(calculateTax(200, 0.2)); // 40
// console.log(calculateTax(100, 0.3)); // 30
// console.log(calculateTax(200, 0.3)); // 60
// console.log(calculateTax(100)); // 20
// console.log(calculateTax(200)); // 40
