/*
Дефолтний імпорт
Якщо використовувти дефолтний імпорт, то
там де назва сутності, ми завжди витягемо саме ту,
сутність, яка була експортована за дефолтом.
При імпорті за дефолтом, назва сутності може
бути довільна. 
*/ 
// Синтаксис
/*
1. ключове слово import
2. назва сутності, яка імпортується
3. ключове слово from
4. шлях, звідки відбудеться імпорт
*/ 
// import sum from "./js/helper.js";

// console.log(sum(5, 10));

// Іменований імпорт

/* Назви сутностей при імпорті повинні співпадати
з назвами сутностей при експорті.
Іменовані імпорти можна перейменовувати*/ 

// import { value as helperValue, logger } from "./js/helper.js";

// const value = 100;

// console.log("helperValue", helperValue);
// logger("hello");

// ===================
// Спосіб, як можна записати разом дефолтний
// і іменований імпорт

// import sum, { logger, value as helperValue } from "./js/helper.js";

// console.log(sum(5, 10));

// const value = 100;

// console.log("helperValue", helperValue);
// logger("hello");

// ===============================

// Імпорт простору імен

/*
Дефолтний краще не імортувати способом 
імпорту простору імен, а окремо.
*/

// import  * as helper from "./js/helper.js";
// console.log(helper.value); // 5
// helper.logger("lalala") // "lalala"
// console.log("name", helper.userName); // "name Petro"

// console.log(helper.skill); // "React"


