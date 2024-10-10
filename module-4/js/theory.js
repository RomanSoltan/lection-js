"use strict";

// // Оголоси змінну apartment і задай ій об'єкт, який описує квартиру з наступними характеристиками:

// // imgUrl - рядок, що містить шлях до зображення, значення "https://via.placeholder.com/640x480";
// // descr - рядок, що містить опис, значення "Spacious apartment in the city center";
// // rating - число, що містить рейтинг, значення 4;
// // price - число, що містить ціну, значення 2153;
// // tags - масив рядків, що містить метаінформацію, значення ["premium", "promoted", "top"].

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Об'єкт apartment описує квартиру з наступними характеристиками

// // imgUrl - шлях до зображення
// // descr - опис
// // rating - рейтинг
// // price - ціна
// // tags - метаінформація
// // Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.

// // Додай об'єкту owner наступні властивості:

// // name - рядок, що містить ім'я власника, значення "Henry";
// // phone - рядок, що містить номер телефону, значення "982-126-1588";
// // email - рядок, що містить пошту, значення "henry.carter@aptmail.com"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Об'єкт apartment описує квартиру і має 5 властивостей: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.

// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// // aptRating - рейтинг;
// // aptDescr - опис;
// // aptPrice - ціна;
// // aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// // Об'єкт apartment описує квартиру 6 властивостями: шлях до зображення, опис, рейтинг, ціна, теги і власник. Властивість owner (власник) також є об'єктом. Оголошено шість змінніх, значення яких це значення відповідних властивостей об'єкту apartment.

// // Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// Об'єкт apartment описує квартиру з 5 властивостями: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значення яких це значення відповідних властивостей об'єкту apartment.

// Доповни код, задавши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис квадратних дужок.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

// // Доповни код, оновивши значення властивостей об'єкта apartment:

// // ціну у властивості price на 5000;
// // рейтинг квартири у властивості rating на 4.7;
// // ім'я власника у вкладеній властивості name на "Henry Sibola";
// // масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

// // Додай об'єкту apartment кілька нових властивостей:

// // area - площа в квадратних метрах, число 60;
// // rooms - кількість кімнат, число 3;
// // location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// // country - країна, рядок "Jamaica";
// // city - місто, рядок "Kingston".
// // Зверніть увагу: якщо ви спробуєте додати властивості country і city до ще не створеної властивості location, ви отримаєте помилку. Спочатку ініціалізуйте location як порожній об'єкт, а потім додавайте до нього властивості.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country : "Jamaica",
//   city : "Kingston",
// };

// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);
// console.log(apartment.location.country);
// console.log(apartment.location.city);

// // Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.

// // Оголошена змінна product
// // Значення змінної product - це об'єкт
// // Значення вкладеної властивості name - це рядок "Repair Droid"
// // Значення вкладеної властивості price - це число 2500
// // Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// // Значення вкладеної властивості tags - це масив ["on sale", "trending", "best buy"]

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);

// // Використовуючи синтаксис обчислювальних властивостей, доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, ключі яких зберігаються у змінних emailInputName і passwordInputName.

// // Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

// // Оголошена змінна credentials
// // Значення змінної credentials - це об'єкт
// // Об'єкт credentials містить властивість email
// // Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// // Об'єкт credentials містить властивість password
// // Значення вкладеної властивості password - це рядок "jqueryismyjam"
// // Використано синтаксис обчислювальних властивостей

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// console.log(credentials.email);
// console.log(credentials.password);

// ==================================== 2
// Перебір об'єкта.

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Використано цикл for...in

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for(const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);


// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment)

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція використовує метод Object.keys()

// function countProps(object) {
//   const keys = Object.keys(object);

//   return keys.length;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат
// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const valuesSalar = Object.values(salaries);

//   for (const i of valuesSalar) {
//     totalSalary += i;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

// =============================== 3
// Масив об'єктів

// Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for(const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const item of products) {
//     if (productName === item.name) {
//       return item.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar")); // 1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid")); // 400
// console.log(getProductPrice("Engine")); // null





// Напиши функцію getAllPropValues(propName), яка приймає один параметр 
// propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх 
// значень властивості з таким ім'ям з кожного об'єкта в масиві products. 
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна 
// повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []


// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const arr = [];

//   for (const item of products) {
//     if(item[propName]){
//       arr.push(item[propName]);
//     }
//   }

//   return arr;
// }

// console.log(getAllPropValues("name")); 
// // // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []



// Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає "Product Blaster not found!"
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const item of products) {
//     if(productName === item.name) {
//       return item.price * item.quantity;
//     } 
//   }
//   return `Product ${productName} not found!`;;
// }

// console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800
// console.log(calculateTotalPrice("Scanner")); // 8100



// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив []
// Значення властивості getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає рядок "List of all available potions"
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.addPotion("Invisibility") повертає рядок "Adding Invisibility"
// Виклик методу atTheOldToad.addPotion("Power potion") повертає рядок "Adding Power potion"

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return "List of all available potions";
//   },
//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   }
// }

// console.log(atTheOldToad.getPotions());
// // "List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility"));
// // "Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion"));
// // "Adding Power potion"

// ============================ THIS

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив ["Speed potion", "Stone skin"]
// Значення властивості getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions


// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());



// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив ["Speed potion", "Stone skin"]
// Значення властивості getPotions - це метод об'єкта
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions
// Після виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility"]
// Після виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility", "Power potion"]


// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   }
// };

// console.log(atTheOldToad.getPotions()); 
// // ["Speed potion", "Stone skin"]

// atTheOldToad.addPotion("Invisibility");
// console.log(atTheOldToad.getPotions());
// // ["Speed potion", "Stone skin", "Invisibility"]

// atTheOldToad.addPotion("Power potion");
// console.log(atTheOldToad.getPotions());
// // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]



// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
// Значення властивості atTheOldToad.getTotalPrice - це метод об'єкта
// Виклик методу atTheOldToad.getTotalPrice() повертає загальну вартість усіх зілль з властивості potions

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let sum = 0;

//     for(const potion of this.potions) {
//       sum += potion.price;
//     }
//     return sum;
//   },
// };

// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// console.log(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.getTotalPrice());



// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
// Після другого виклику методу atTheOldToad.updatePotionName("Speed potion", "Polymorth"), у властивості potions буде масив [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for(const item of this.potions) {
//       if(item.name === oldName) {
//         item.name = newName;
//       }
//     }
//   },
// };

// atTheOldToad.updatePotionName("Stone skin", "Invisibility");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]

// atTheOldToad.updatePotionName("Speed potion", "Polymorth");
// console.log(atTheOldToad.getPotions());
// // [{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 } ]


// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.


// ======================= ...REST ...ARGS

// Оголошена функція add
// Функція add оголошує параметр args
// Для збирання аргументів у змінну args у підписі функції використовується синтаксис залишкових параметрів
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78

// function add(...args) {
//   let sum = 0;

//   for(const item of args) {
//     sum += item
//   }
//   return sum;
// }


// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75
// console.log(add(32, 6, 13, 19, 8)); // 78


// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// На завершення поверни загальну суму
// Оголошена функція addOverNum()
// Функція addOverNum приймає наступні параметри: value, ...args
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218

// function addOverNum(firstArg, ...args) {
//   let sum = 0;
//   for(const arg of args) {
//     if(firstArg < arg) {
//       sum += arg;
//     }
//   }
//   return sum;
// }

// console.log(addOverNum(50, 15, 27)); //повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //повертає 218

// ========================= ...SPREAD

// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

// Оголошена функція getExtremeScores(scores)
// Виклик функції getExtremeScores([89, 64, 42, 17, 93, 51, 26]) повертає об'єкт { best: 93, worst: 17 }
// Виклик функції getExtremeScores([19, 7, 4, 17, 81, 24]) повертає об'єкт { best: 81, worst: 4 }
// Для передачі аргументів методам Math.max() і Math.min() використовується синтаксис ... на масиві scores

// function getExtremeScores(scores) {
//   const extremeScores = {};
//   extremeScores.best = Math.max(...scores);
//   extremeScores.worst = Math.min(...scores);

//   return extremeScores;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// // повертає об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));
// // повертає об'єкт { best: 81, worst: 4 }


// ====================== Створення масиву ...spread

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розпилення, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив [64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


// ========================== Створення об'єкта ...spread

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, користувацькі налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені користувацькі налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// Оголошена змінна defaultSettings
// Значення змінної defaultSettings - це об'єкт
// Оголошена змінна overrideSettings
// Значення змінної overrideSettings - це об'єкт
// Оголошена змінна finalSettings
// Значення змінної finalSettings - це об'єкт
// Значення властивості finalSettings.theme дорівнює "light"
// Значення властивості finalSettings.public дорівнює "false"
// Значення властивості finalSettings.withPassword дорівнює "true"
// Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// Значення властивості finalSettings.timePerQuestion дорівнює 30
// Для присвоєння значення змінній finalSettings використовується синтаксис ...

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { 
//   ...defaultSettings,
//   ...overrideSettings,
// };

// console.log(finalSettings);
