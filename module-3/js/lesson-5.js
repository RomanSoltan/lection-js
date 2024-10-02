// ========================================== 1
/**
 * Розгалуження
 *
 * - Інструкція if
 * - Інструкція if....else
 * - Блок else...if
 * - Тернарний оператор
 */

// Розгалуженя дає нам можливість виконувати взалежності від умови ту чи іншу дію. Якщо умова true(істина) - робимо одне, якщо false(хиба) - робимо щось інше або не робимо нічого. Умова, яку ми передаємо в круглі дужки нашої конструкції if нашого розгалуження завжди буде приводитися до булевого типу. Незалежно від того чи буде воно самостійно перетворюватися чи ні.

// if (умова) {
// якщо умова true заходимо в блок if і виконується код у цьому блоці
// }

// console.log("before");

// //true в умові if
// if (5 > 3) {
//   console.log("ok");
// }

// console.log("after");

// Якщо умова буде хибною, тоді ми не потрапляємо в тіло конструкції if і код в цьому блоці не виконується, тобто ігнорується.

// console.log("before");

// //false в умові if
// if (5 > 13) {
//   console.log("ok");
// }

// console.log("after");

// Конструкцію if можна розширрити додавши блок else
// Якщо умова if приводиться до false, тоді ми потрапляємо в блок else, де виконується код, який є всередині блоку else.

//    //false
// if (5 > 13) {
//   // код ігнорується
//   console.log("ok");
// } else {
//   // виконається код в блоці else
//   console.log("else");
// }

// Задача про шоколадку

// const sum = 100;
// let message;

// if (sum >= 100) {
//   message = "big chocolate";
//   // console.log("big chocolate");
// } else {
//   message = "small chocolate";
//   // console.log("small chocolate");
// }

// console.log(message);

/**
 * ========================= if else if else
 */

// Тут є помилка в умові 2. Коли використовуєш кілька блоків if, то потрібно прописувати умови у вигляді воронки, від більшого до мешого або навпаки.

// const points = 500;

// if (points <= 500) {
//   console.log("level 1");
// } else if (points > 500) {
//   console.log("level 2");
// } else if (points > 1500) {
//   console.log("level 3");
// } else {
//   console.log("level 4");
// }

// правильно
// const points = 501;

// if (points > 1500) {
//   console.log("level 1");
// } else if (points > 500) {
//   console.log("level 2");
// } else if (points === 500) {
//   console.log("level 3");
// } else {
//   console.log("level 4");
// }

/**
 * ========================= Тернарний оператор
 */

// Коли порібно виконати одну умову і результат потрібно зберегти в змінну, то краще використати тернарний оператор, який найкраще підходить для легких умов.

// Синтаксис тернарного оператора
// < condition > ? < expression_1 > : < expression_2 >

// Якщо умова(condition) приводиться до true,
// виконається expression_1,
// умова до false,
// то виконається expression_2

// const balance = 1000;
// let message;

// if (balance >= 0) {
//   message = "Positive";
// } else {
//   message = "Negative";
// }

// console.log(message);

// const message = balance >= 0 ? "Positive" : "Negative";
// console.log(message);

// ========================================== 2
/**
 * Розгалуження
 *
 * - Блокова область видимості змінних
 */

// const c = 15; //глобальна область
// const b = 4;

// if (true) {
//   //Локальна область
//   //   const a = 5;
//   // const b = 6;
//   // console.log(a); // отримаємо значення змінної а, бо а викликаєтьс я з локальної області

//   // console.log(b); //отримаємо 6. У нас є дві змінні (b), оскільки вони були створені у різних областях видимості, то це дві різних змінних(вони просто називаються однаково).

//   // console.log(c); // отримаємо доступ до змінної с, оскільки вона оголошена у глобальній області видимості цього коду
// }

// console.log(c);

// console.log(a); // не отримаємо значення змінної (а). буде помилка, оскільки змінна (а) існує тільки у локальній області видимості, в якій вона була оголошена(створенна)

// ============================================= 3

/**
 * Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

 */

// const hours = 14;
// const minutes = 26;

// let time;

// if (minutes) {
//   time = `${hours} г. ${minutes} хв.`;
// } else {
//   time = `${hours} г.`;
// }

// console.log(time);

// function foo(minutes) {
//   if (minutes) {
//     return `${hours} г. ${minutes} хв.`;
//   } else {
//     return `${hours} г.`;
//   }
// }

// console.log(foo(minutes));

/**
 * Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Today"
// Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
// Якщо до дедлайну 2 дні - виведи рядок "Overmorrow"
// Якщо до дедлайну 3+ днів - виведи рядок "Date in the future"
 */

// const daysUntilDeadline = 4;

// if (!daysUntilDeadline) {
//   console.log("Today");
// } else if (daysUntilDeadline === 1) {
//   console.log("Tomorrow");
// } else if (daysUntilDeadline === 2) {
//   console.log("Overmorrow");
// } else {
//   console.log("Date in the future");
// }

// Поєднання if..else та switch case

// const daysUntilDeadline = -1;

// if (daysUntilDeadline >= 0) {
//   switch (daysUntilDeadline) {
//     case 0:
//       console.log("Today");
//       break;
//     case 1:
//       console.log("Tomorrow");
//       break;
//     case 2:
//       console.log("Overmorrow");
//       break;
//     default:
//       console.log("Date in the future");
//   }
// } else {
//   console.log("Too late. It was yesterday");
// }

/**
 * Оператор switch case
 */

// switch (/*значення, яке буде порівнюватися у switch*/) {
//   case 1:
//     // код, який виконається у першому випадку
//     break; // для зупинки виконання коду, після відпрацюваня case і виходу з конструкції switch
//   case 2:
//     // код, який виконається у другому випадку
//     break;
//   case 3:
//     // код, який виконається у третьому випадку
//     break;
//   default:
//     // код, який виконається, коли інші кейси не спрацюють
// }

// Ця конструкція працює подібно до if..else, але switch працює швидше за рахунок того, що браузер одразу обирає потрібний case, на відміну від if..else, де браузер перебирає усі варіанти по черзі, і обирає той, який підходить. Відбувається суворе порівняння ===, і регістр важливий. Використовується для перевірки рядків і чисел.

// const user = "Kate";

// switch (user) {
//   case "Kate":
//     console.log("case 1");
//     break;
//     1;
//   case "Alice":
//     console.log("case 2");
//     break;
//   case "Roman":
//     console.log("case 3");
//     break;
//   default:
//     console.log("default");
// }

/**
 * Напиши скрипт вибору опції доставки товару.
 * Опція зберігається у змінній option: 1 - самовивіз, 2 - кур'єр, 3 - пошта
 *
 * У змінну message записати повідомлення залежно від опції.
 * - "Ви зможете забрати товар завтра з 12:00 у нашому офісі"
 * - "Кур'єр доставить замовлення завтра з 9:00 до 18:00"
 * - "Посилка буде відправлена сьогодні"
 * - "Вам передзвонить менеджер"
 */

// const option = 1;

// function delivery(option) {
//   let message;

//   switch (option) {
//     case 1:
//       message = "Ви зможете забрати товар завтра з 12:00 у нашому офісі";
//       break;
//     case 2:
//       message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//       break;
//     case 3:
//       message = "Посилка буде відправлена сьогодні";
//       break;
//     default:
//       message = "Вам передзвонить менеджер";
//   }
//   return message;
// }

// console.log(delivery(option));

// document.body.innerHTML = delivery(option);

// ============================================ 5

/**
 * Логічні оператори
 *
 * - Перетворення типів: логічне
 * - Оператор && (логічне і)
 * - Оператор || (логічне або)
 * - Оператор ! (логічне ні(заперечення))
 */

// Шість false значень
// При приведенні до типу буля ці шість значень перетворюються на FALSE,
//  все інше в булевому вираженні буде повертати - TRUE
// 1. 0
// 2. NaN
// 3. undefined
// 4. null
// 5. "" - порожній рядок, якщо рядок з пробілом (" ") - буде TRUE
// 6. false

// console.log(Boolean(0)); // поверне false
// console.log(Boolean(NaN)); // поверне false
// console.log(Boolean(undefined)); // поверне false
// console.log(Boolean(null)); // поверне false
// console.log(Boolean("")); // поверне false
// console.log(Boolean(false)); // поверне false

/**
 * Оператор && (логічне і)
 */

// Оператор && (логічне і) перевіряє чи операнд зліва і справа від нього у булевому вираженні повертають true.

// Оператор && (логічне і) повертає значення ПЕРШОГО FALSE (незалежно від того, де воно знаходиться чи зліва, чи справа) і припиняє перевірку. У разі якщо при перевірці і зліва, і справа буде TRUE, то оператор && (логічне і) повертає значення ОСТАННЬОГО TRUE.

// console.log(5 && 4); // true && true // буде 4
// console.log(null && 4); // false && true // буде null
// console.log("null" && undefined); // true && false // буде undefined

/**
 * Оператор || (логічне або)
 */

// Оператор || (логічне або) перевіряє чи хоча б один операнд зліва або справа від нього в булевому вираженні повертає TRUE

// Оператор || (логічне або) повертає значення ПЕРШОГО TRUE (незалежно від того, де воно знаходиться чи зліва, чи справа) і припиняє перевірку. У разі якщо при перевірці і зліва, і справа буде FALSE, то Оператор || (логічне або) повертає значення ОСТАННЬОГО FALSE.

// console.log(5 || 4); // true || true // буде 5
// console.log(false || 4); // false || true // буде 4
// console.log(false || null); // false || false // буде null

/**
 * Оператор ! (логічне ні(заперечення))
 */

// Оператор ! (логічне ні(заперечення)) візьме значення, яке повернеться у результаті виразу (повернеться булевий тип данних true або false) і перетворить його (інвертує) на протилежний булевий тип данних. Тобто якщо було TRUE Оператор ! (логічне ні(заперечення)) перетворить його на FALSE і поверне значення цього FALSE.

// console.log(!false); // false => false => !false => true // буде true
// console.log(!5); // true => true => !true => false // буде false
// console.log(!undefined); // false => false => !false => false // буде true

// console.log(true && 3); // 3
// console.log(null && 3); // null
// console.log(true && 4 && "Alice"); // "Alice"
// console.log(true && 4 && 0 && "Alice"); // 0

// console.log(true || 3); // true
// console.log(true || 3 || 4); // true
// console.log(true || false || 4); // true
// console.log(undefined || false || null); // null
// console.log(undefined || 2 || null); // 2

//              null || 3 || 4
// console.log(null || (2 && 3) || 4); // 3
//                 null >  0
// console.log((1 && null && 3) > 0); // false
// console.log(Number(null));

// ============================================= 6

/**
 * Напиши скрипт перевірки підписки користувача при доступі до контенту
 * - Є три типи підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

// const sub = "vip";
// let canConnect;

// if (sub === "pro" || sub === "vip") {
//   canConnect = "Connection is true";
// } else {
//   canConnect = "Connection is false";
// }

// console.log(canConnect);

// тернарний

// const sub = "pro";
// let canConnect;

// canConnect =
//   sub === "pro" || sub === "vip"
//     ? "Connection is allowed"
//     : "Connection is not allowed";

// console.log("Дозволити доступ?", canConnect);

/**
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режиму не турбувати
 */

// const isFriend = true;
// const isOnline = true;
// const isDnD = false;

// const canOpenChat = isFriend && isOnline && !isDnD;
// console.log("Можна відкрити чат?", canOpenChat);

// const fruit = "apple";

// switch (fruit) {
//   case "apple": {
//     console.log("apple");
//     break;
//   }
//   case "banana": {
//     console.log("banana");
//     break;
//   }
//   case "melon": {
//     console.log("melon");
//     break;
//   }
//   default: {
//     console.log("other fruit");
//   }
// }

// function getFileName(file) {
//   const ext = file.indexOf(".");
//   if (ext === -1) {
//     return file;
//   } else {
//     return file.slice(0, ext);
//   }
// }
// console.log(getFileName("style.css"));

// function getFileName(file) {
//   const newFile =
//     file.indexOf(".") === -1 ? file : file.slice(0, file.indexOf("."));
//   return newFile;
// }
// console.log(getFileName("style.js"));
