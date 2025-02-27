//  --------------------------- 1
// **
// * Змінні та типи даних
// */

// Змінну, яка створена за допомогою ключового слова const ми приміняємо
// завжди, окрім тих випадків, коли нам потрібно їх змінювати (напр. для
// створення лічильників).
// Const нам потрібен для того, щоб позбавити нас в подальшому якихось
// помилок.

// const age = 10;
// age = 20; // помилка в консолі, так не можна
// ініціалізувати (записати значення у змінну) можна лише один раз, одразу при створенні;
// не можна перевизначити (буде помилка у консолі).

// let totalPrice = 25.5;
// ініціалізувати можна пізніше (помилки у консолі не буде);
// в подальшому можемо звертатися до змінної скільки завгодно разів і перезаписувати її;
// якщо не записати у змінну жодних данних, за замовчуванням автоматично буде присвоєно underfined

// totalPrice = 100.5;
// totalPrice = 1;
// totalPrice = 20;

// console.log(totalPrice);
// console.log() це консоль для розробників

/* Примітивні типи даних */

// 1. Number - число;
// const droid = 10;

// 2. String - рядок;
// const userName = "Alice";
// Рядок береться у подвійні(одинарні) лапки. Якщо у нас є подвійні(одинарні) лапки - це рядок.

// 3. Boolean;
// const isOpen = true;
// Булевий тип даних - це логічний тип даних. Він в собі має або true(істина), або false(хиба).
// Булевий тип даних записується без лапок(true). Якщо є лапки("true") - то це рядок(string).
// Назва змінної у булевому типі задається у формі питання, на яке можна відповісти так(true), або ні(false).

// 4. Null - нуль або нічого;
// const user = null;
// Використовується, коли ми створили змінну, але нам немає що туди класти і ми покладемо туди якісь дані пізніше. То розробник явно присвоює змінній значення null.
// Тип даних null - це object. Це історичний баг у JS, який не будуть виправляти задля зворотньої підтримки старих проєктів.

// 5. Undefined - не визначено;
// let product;
// Цей тип даних автоматично присвоюється в нашу змінну, коли в неї нічого не поклали (не ініціалізували), або змінній було явно задано значення undefined або в інших випадках.
// Значення змінної - undefined, тип даних автоматично присвоєний змінній - також undefined.

// Оператор typeof допомагає розробнику дізнатися, який тип даних лежить у змінних. Напр - console.log(typeof name); покаже, що лежить у змінній name.

//  --------------------------- 2

// **
// * Типові помилки
// */

// 1. Неправильне звернення до змінної. Треба бути дуже уважним до назв змінних.
// const userName = "Alice";
// console.log(user); звертаємось до змінної user, якої у нас немає.

// 2. Значення із нашої змінної ми можемо отримати лише після її створення.
// console.log(userName);           буде помилка у консолі,
// const userName = "Alice";        бо неможливо отримати
//                                  значення змінної до її створення.

// 3. Якщо змінна створена за допомогою ключового слова const, то переініціалізувати її, тобто записати туди нове значення ми не зможемо.
// const userName = "Alice";
// userName = "Petya";
// console.log(userName);  буде помлка у консолі.

// Для перезаписування значення використувуємо ключове слово let.

//  --------------------------- 3

// **
// * Арифметичні операції
// */

// const x = 13;
// const y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y); залишок від ділення остача. 13 = 5 + 5 + 3
//                      поверне 3
// console.log(x ** y); приведення до степення

/**
 * Виведи на екран загальну кількість яблук та винограду.
 * Різницю яблук та винограду.
 */

// const apples = 131;
// const grapes = 47;

// const total = apples + grapes;
// console.log(total);

// const diff = apples - grapes;
// console.log(diff);

/**
 * Заміни вираз перевизначення комбінованим оператором
 */
// Якщо ми в змінну зберігаємо результат виконання якоїсь дії з цією самою змінною, то ми можемо скористатися комбінованим оператором.

// let students = 100;
// students = students + 50;
// students += 50; ця інструкція тотожна верхній інструкції, скорочений запис
// students -= 50;
// students *= 50;
// students /= 50;
// console.log(students);

/**
 * Розбери пріоритет операторів в інструкції привласнення значення змінній
 */

// const result = 100 + 50 - 2 * 5;
// console.log(result);

// спочатку - ();
// піднесення до степеня - **;
// множення, ділення - *, /;
// додаваня, віднімання - +, -;

//  --------------------------- 4

/**
 * Рядки
 */

// 1. Конкатенація (зшивання або поєднання) рядків .

// Коли використовуємо символ +, щоб поєднати рядок з іншими рядками або змінними, то відбувається їхня конкатенація, тобто поєднання рядків в один рядок. Тобто з двох рядків створюється один рядок.

// const firstName = "Alice";
// const lastName = "Franko";

// const fullName = firstName + " " + lastName;
// console.log(fullName);

// 2. Шаблонний рядок

// `` - косі лапки, синтаксис шаблонного рядка.
// ${nameValue} - інтерполяція, для використання змінних всередині у шаблонному рядку.

// const quantity = 5;
// // шаблонний рядок
// const message = `You ordered ${quantity} droids.`;
// console.log(message);

// length Властивість довжина рядка
// Властивість викликається за допомогою крапки.
//                  01234 - індекси елемента
// const message = "Hello friends";
//                  12345 - порядок елементів
// Індекс елемента завжди менший на одиницю за порядок елемента.
// // довжина рядка
// console.log(message.length);

// // індекс елемента, який хочемо отримати
// console.log(message[0]);

// // За допомогою довжини рядка можна дізнатися індекс останнього елемента.
// console.log(message[message.length - 1]);

// let message = "Hello friends";
// message[0] = "L";
// console.log(message);
// // буде помилка у консолі. Рядки, якщо вони були створенні, то вони залишаються незмінними. Таким чином перезаписати якийсь окремий елемент рядка не можливо. Хочеш перезаписати створюй нову змінну.

/**
 * Склади фразу за допомогою шаблонних рядків
 * A has B bots in stock, де A, B - змінні вставленні в рядок.
 */

// const companyName = "Boston dynamics";
// const repairBots = 150;
// const defenceBots = 50;

// const str = `${companyName} has ${repairBots + defenceBots} in stock`;
// console.log(str);

// -------------------------- 5

/**
 * Перетворення типів: рядки
 */

// Є два типи перетворювання, як ми можемо перетворити дані у рядок.

// 1. Явний тип перетворення.
// Це коли ми беремо якесь значення і кажемо, зроби мені з цього значеня рядок, і перетворюємо його в рядок.

// console.log(String(5));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));

// 2. Неявний тип перетворення.
// Тобто, це коли ми виконуємо якусь дію, внаслідок якої у нас тип даних змінюється.
// Неявне перетворення у нас відбувається, коли ми пробуємо виконати дію додавання рядка з чимось ще.

// console.log("5" + 3); // відбудеться конкатенація і повернеться рядок "53"
// console.log("5" + true); // "5true"
// console.log("5" + null); // "5null"
// console.log("5" + undefined); // "5undefined"
