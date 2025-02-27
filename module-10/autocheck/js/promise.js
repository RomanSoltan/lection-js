/* ======================================================================================================================
Що таке проміси?
====================================================================================================================== */

/*Promise (проміс, від англ. promise — обіцяти) — 
об'єкт, що представляє поточний стан асинхронної 
операції. Це обгортка для значення, невідомого на 
момент створення промісу. Проміс дозволяє обробляти 
результати асинхронних операцій таким чином, якби 
вони були синхронними: замість кінцевого результату 
асинхронної операції, повертається своєрідна обіцянка 
отримати результат у майбутньому.*/ 

/*Що таке проміс?

Проміс — це об'єкт, що зберігає стан асинхронної 
операції, який використовується для відслідковування 
стану операції: чи була операція виконана успішно, з 
помилкою, або ще не завершена.*/

/* ======================================================================================================================
Життєвий цикл проміса
====================================================================================================================== */

/*Проміс може бути у трьох станах:

  1. Очікування (pending) — 
початковий стан під час створення промісу.
  2. Виконано (fulfilled) — 
операція виконана успішно з будь-яким результатом.
  3. Відхилено (rejected) — 
операція відхилена з помилкою.*/ 

/*На момент створення проміс знаходиться в 
очікуванні (pending). Після чого він може 
завершитися успішно (fulfilled), повернувши 
результат (значення). Проміс може також 
завершитися не успішно (rejected) і повернути 
помилку. Коли проміс переходить у стан 
fulfilled або rejected — це назавжди.

Коли проміс виконаний або відхилений, 
використовується термін settled. Це не окремий 
стан, а лише спосіб описати, що проміс 
перебуває в будь-якому стані, крім очікування.*/ 

/* ======================================================================================================================
Створення проміса
====================================================================================================================== */

/*Проміс створюється як екземпляр класу Promise, 
який приймає функцію як аргумент (називається 
"виконавцем" (executor)) і відразу викликає її, 
ще до створення і повернення промісу.*/ 

// const promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
// });
/*
  1. resolve(value) — функція для виклику у разі 
успішної операції. Переданий їй аргумент буде 
значенням виконаного промісу.
  2. reject(error) — функція для виклику у разі 
помилки. Переданий їй аргумент буде значенням 
відхиленого промісу.*/ 

/*Колбек-функція повідомляє проміс, коли і як 
операція, з якою він пов'язаний, буде завершена. 
У ній можна виконувати будь-яку асинхронну 
операцію. Після її завершення потрібно викликати:

  resolve() для позначення успішного виконання. 
  Результатом буде fulfilled.

Або

  reject() у разі помилки, який встановлює стан 
  промісу як "відхилений" (rejected).

Значення, що повертається цією 
функцією-виконавцем, ігнорується.*/ 

/*У прикладі показано, як змінюється значення 
змінної isSuccess на true або false, щоб 
викликати resolve або reject та імітувати 
успішне виконання промісу (fulfilled) або 
виконання з помилкою (rejected).*/ 

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

/*
У змінну promise буде записаний проміс (об'єкт)
у стані pending, а через дві секунди, щойно 
буде викликаний resolve() або reject(), проміс 
перейде у стан fulfilled або rejected, і ми 
зможемо його обробити.*/ 

/*Правильний синтаксис створення промісу в JavaScript 
— це const promise = new Promise(executor). 
Тобто використовується ключове слово new і 
конструктор Promise(), щоб створити проміс.

Виклик new Promise() повертає об'єкт.*/

/* ======================================================================================================================
Метод then()
====================================================================================================================== */

/*Код, якому потрібно зробити щось асинхронно, 
створює проміс і повертає його.

Зовнішній код, отримавши проміс, додає до нього 
обробники. Після завершення процесу асинхронний 
код переводить проміс у стан fulfilled або rejected, 
і автоматично викликаються методи промісів 
(обробники) у зовнішньому коді.

Метод проміса then() приймає два аргументи — 
дві callback функції, які будуть викликані, 
коли проміс змінить свій стан.

Результат промісу — це значення або помилка, 
яку функції отримають як аргументи.

promise.then(onResolve, onReject)

  1. onResolve(value) — 1-й аргумент методу then(), 
колбек-функція, яка буде викликана у разі успішного 
виконання промісу та отримає його результат як аргумент.
  2. onReject(error) — 2-й аргумент методу then(), 
колбек-функція, яка буде викликана у разі виконання 
промісу з помилкою та отримає її як аргумент.

Після створення промісу, його результат 
обробляється в callback-функції.

Код пишеться таким чином, щоб врахувати 
всі сценарії на майбутнє:

  1. Якщо проміс виконається.
  2. Якщо проміс не виконається.

У прикладі нижче callback-функція onResolve 
буде викликана через дві секунди, якщо проміс 
успішно виконається, а onReject буде викликана 
через дві секунди у тому разі, якщо проміс 
виконається з помилкою.*/ 

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value);
//     // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error);
//     // "Error! Error passed to reject function"
//   }
// );

/*Якщо функції onResolve і onReject містять 
складну логіку, їх для зручності оголошують 
як зовнішні функції і передають у метод 
then() за ім'ям.*/ 

/*Який метод промісу використовується для 
обробки його результату?

Метод промісу, який використовується для 
обробки його результату, це then.*/ 

/*Коли виконається колбек-функція, яка 
передається першим аргументом у метод then?

Колбек-функція, яка передається першим 
аргументом у метод then, виконається після 
того, як проміс буде виконано успішно.

Що отримує функція, яка передається першим 
аргументом у метод then?

Функція, яка передається першим аргументом 
у метод then, отримує значення, з яким 
виконався проміс. Якщо проміс завершився з 
помилкою, то ця функція не викликається. 
Помилку можна обробити у колбек-функції, 
передаючи її другим аргументом у метод then.*/ 

/* ======================================================================================================================
Метод catch()
====================================================================================================================== */

/*На практиці в методі then() обробляють тільки 
успішне виконання промісу.

Помилку його виконання обробляють у спеціальному 
методі catch() для «відловлювання» помилок.*/ 

// promise
//     .then(value => {
//       // Promise fulfilled
//     })
//     .catch(error => {
//        // Promise rejected
//     });

/*Колбек-функція в методі catch буде 
викликана в разі виконання промісу з 
помилкою, і отримає цю помилку як 
аргумент. Метод catch має йти після then.*/

/*Винесемо обробку помилки з методу 
then у метод catch.*/ 

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//     .then(value => {
//       console.log(value);
//       // "Success! Value passed to resolve function"
//     })
//     .catch(error => {
//       console.log(error);
//       // "Error! Error passed to reject function"
//     });

/*Чи виконається метод catch, якщо проміс 
виконався без помилки?

Метод catch не виконається, якщо проміс 
виконався без помилки*/ 
// ----

/*Коли виконається функція, яка передається
аргументом у метод catch?

Функція, яка передається аргументом у метод 
catch, виконається після того, як проміс 
буде виконано з помилкою. Тобто вона 
призначена для обробки помилок, які виникають 
під час виконання промісу.*/ 
// ----------

/*Що отримує функція, яка передається 
аргументом у метод catch?

Функція, яка передається аргументом у 
метод catch, отримує помилку, з якою 
виконався проміс*/

/* ======================================================================================================================
Метод finally()
====================================================================================================================== */

/*Цей метод може бути корисним, якщо необхідно 
виконати код після того, як проміс буде виконаний 
незалежно від результату (fulfilled або rejected).*/ 

// promise 
//     .then(value => {
//       // Promise fulfilled
//     })
//     .catch(error => {
//       // Promise rejected
//     })
//     .finally(() => {
//       // Promise fulfilled or rejected
//     });

/*Метод finally() дозволяє уникнути дублювання 
коду в обробниках then() і catch().

Колбек-функція не отримає жодних аргументів, 
оскільки неможливо визначити, чи був проміс 
виконаний або відхилений. Тут буде виконуватися 
код, який необхідно запустити в будь-якому разі.*/ 

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise
//     .then(value => console.log(value)) // "Success! Value passed to resolve function"
//     .catch(error => console.log(error)) // "Error! Error passed to reject function"
//     .finally(() => console.log("Promise settled")); // "Promise settled"

/*Чи виконається метод finally, якщо вже 
виконався метод then?

Метод finally виконається незалежно від того, 
чи вже виконався метод then, чи сталася 
помилка (rejected).*/
// -------------- 

/*Коли виконається функція, яка передається 
аргументом у метод finally?

Функція, яка передається аргументом в метод 
finally, виконається після того, як проміс 
буде виконано, незалежно від того, чи він 
виконався успішно, чи сталася помилка.*/ 
// --------------

/*Що отримує функція, яка передається 
аргументом у метод finally?

Функція, яка передається аргументом у 
метод finally, не отримує жодних значень 
або помилок від промісу.*/ 

/* ======================================================================================================================
Ланцюжки промісів
====================================================================================================================== */

/*Метод then() повертає новий проміс, який 
у свою чергу отримує значення від своєї 
callback-функції onResolve. Ця особливість 
дозволяє формувати послідовність асинхронних 
операцій, зв'язуючи проміси в ланцюжок.

Метод then() повертає проміс. Перед його 
виконанням може минути деякий час, отже, 
частина ланцюжка, що залишилася, буде чекати 
на результат. У разі виникнення помилки в 
будь-якому місці ланцюжка, виконання всіх 
наступних then() скасовується, а управління 
передається методу catch(). Тому він має 
знаходитись у кінці ланцюжка усіх then().*/ 

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//     .then(value => {
//       console.log(value); // 5
//       return value * 2;
//     })
//     .then(value => {
//       console.log(value); // 10
//       return value * 3;
//     })
//     .then(value => {
//       console.log(value); // 30
//     }) 
//     .catch(error => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("finally");
//     });

/*Що повертає метод then?

Метод then() видає новий проміс, значення 
або статус помилки якого визначається 
результатом колбек-функції, переданої до 
методу then. Завдяки цьому можна створювати 
ланцюжки асинхронної обробки результатів 
через послідовні виклики методу then.*/ 
// ------------------------

/*Яким буде значення промісу, який поверне then?

Значенням промісу, який поверне then, буде 
значення, яке поверне його колбек-функція в 
разі успішного виконання промісу, або помилка, 
яка виникне в разі невдачі. Таким чином, воно 
може бути будь-яким значенням або помилкою, 
залежно від того, як проміс був виконаний.*/ 