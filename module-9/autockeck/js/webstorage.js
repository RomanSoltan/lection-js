// Вебсховище

// Local storage

// Доступ до локального сховища можна отримати в обєкті window:

// console.log(window.localStorage);
// // Storage {length: 0}

// console.log(localStorage);
// // Storage {length: 0}

// =================

// Додавання даних

/* Давай додамо пару ключ-значення до локального
сховища за допомогою методу setItem(key, value), 
доступного в обєкті localStorage: 
*/

// localStorage.setItem("ui-theme", "light");
// console.log(localStorage);
// // Storage {ui-theme: "light", length: 1}

/* А що як у сховищі вже існував запис із ключем "ui-theme"? 
Виклик методу setItem(key, value) перезапише його значення. */ 

// ==================

// Додавання складних даних

/* 
Якщо необхідно зберегти щось, окрім рядка, 
наприклад, масив або об'єкт, необхідно перетворити 
їх у рядок методом JSON.stringify().
*/ 

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem("settings", JSON.stringify(settings));

// ======================

// Отримання даних

/* 
Метод getItem(key) дозволяє зчитати зі сховища запис 
із ключем key і повертає його значення у JSON форматі.
*/ 
// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme); // "light"

// --------------

/* 
Якщо у сховищі відсутній запис з таким ключем, 
метод повертає null.
*/ 
// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem); // null

// ------------

/* 
Якщо значення є примітивним типом, 
немає потреби його парсити.

В іншому випадку, якщо це масив або об'єкт, 
необхідно розпарсити значення методом 
JSON.parse(), щоб отримати валідні дані.
*/ 

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings); // A string

// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // Settings object

// ================

// Видалення даних

/*
Метод removeItem(key) видаляє зі сховища існуючий 
запис з ключем key. В результаті своєї роботи він 
не повертає значення.
*/ 

// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme")); // dark

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme")); // null

// --------------
/* 
Якщо ти хочеш повністю очистити сховище, 
потрібно викликати метод clear(). 
*/ 

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage); 

// localStorage.clear();
// console.log(localStorage); // Storage {length: 0}

/* 
Операція повного очищення сховища є ризикованою. 
Вона може порушити записи, створені іншими 
розробниками проєкту. Краще видаляти лише ті 
записи, які дійсно не потрібні, не покладаючись 
на повну очистку даних сховища.
*/ 

// ====================================

// Сховище сесії

/*
Набір методів та їхній функціонал ідентичні
методам роботи з локальним сховищем.

Єдиний виняток — звертаємося до них через об'єкт
sessionStorage, а не localStorage.
*/ 

// console.log(window.sessionStorage);

/*
Методом setItem(key, value) можна записувати 
як рядки, так і складні типи даних.
*/ 

// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);
// // Storage {user-id: '123', tickets: '{"from":"Lviv","to":"Kyiv","quantity":2}', length: 2}

// ------------------

/* 
Методом getItem(key) можна читати записи, 
використовуючи збережений ключ.
*/ 

// const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets);
// // { from: "Lviv", to: "Kyiv", quantity: 2 }

// ----------------
/*
І звісно, видаляти елементи за ключем і очищатисховище 
цілком методами removeItem(key) і clear() відповідно.
*/ 

// sessionStorage.removeItem("tickets");
// console.log(sessionStorage);
// // Storage {user-id: '123', length: 1}

// sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}

// =================================

// Кейс: Форма з повідомленням

/*
Під час сабміту форми будемо виводити 
в консоль значення текстового поля та очищати форму.
*/ 
// const form = document.querySelector(".feedback-form");

// form.addEventListener("submit", evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   form.reset();
// })

/* 
Проблема

Якщо користувач ввів повідомлення в 
текстове поле і перезавантажив сторінку, 
не надіславши форму, під час перезавантаження 
сторінки введене повідомлення пропадає.
*/ 
/*
Рішення

Зробимо так, щоб при перезавантаженні 
сторінки зберігалося введене повідомлення.

Для цього використовуємо локальне сховище, 
щоб зберегти поточне значення текстового 
поля під час введення.
*/ 

// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", (evt) => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

/*
Змінюючи значення текстового поля і 
перезавантажуючи сторінку, можна побачити 
той самий текст, хоча нічого ще не вводили.
*/ 







