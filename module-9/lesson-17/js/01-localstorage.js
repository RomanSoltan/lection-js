/**
 * LocalStorage
 */ 

/*
LocalStorage дає змогу зберігати, якісь дані
безпосередньо в браузері клієнта
*/ 

// -----------------
/**
 * Збереження
 * Чому треба використовувати метод JSON.stringify?
 */ 

/* 
Давайте збережемо якесь значення в LocalStorage.
Як це відбувається?

Звернемося до LocalStorage і викличемо метод 
setItem(), який приймає в себе два аргументи.
1. Ключ, під яким буде зберігатися значення
2. Значення, яке ми хочемо зберегти в LocalStorage  
Тепер значення буде в localStorage поки
ми його не видалимо.
*/ 
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];


// localStorage.setItem(LS_KEY, "Alice");

// -------------------

/*
Якщо ми хочемо зберегти в localStorage складний
тип данних, напр. масив або обєкт, потрібно 
привести їх до вигляду рядка. Для цього потрібно 
використати JSON.stringify(), який приймає аргументом
дані, які приводяться до рядка.
*/ 

// localStorage.setItem(LS_KEY, JSON.stringify(names))

// ---------------

/**
 * Читання
 * Чому треба використовувати метод JSON.parse()
 */ 
/* 
Для того, щоб отримати якісь дані з localStorage
використовується  метод getItem(), який приймає 
один аргумент, а саме ключ з localStorage, за
яким ми хочемо отримати значення. В результаті
ми отримаємо рядок, незалежно від того, який тип
ми поклали в localStorage число, буль, null, 
обєкт, чи масив.
Коли витягуємо з localStorage складний тип даних
такий як масив чи обєкт,
нам порібно перетворити їх в початковий вигляд,
тобто зробити зворотню операцію JSON.stringify().
Для цього порібно використати JSON.parse(), який 
перетворить дані на початкову структуру.
*/ 
// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, "Alice");
// localStorage.setItem(LS_KEY, JSON.stringify(names))
// const value = localStorage.getItem(LS_KEY);
// console.log(typeof value); // String
// console.log(JSON.parse(value)); // ['Alice', 'Kate', 'Emma']


/*
Якщо просто рядок чи примітивнй тип даних
JSON.parse() чи JSON.stringify() нам просто 
не потрібний.
JSON.parse() і JSON.stringify() для складних
типів даних, обєктів і масивів
*/ 

// -------------------

/**
Видалення
*/ 
/*
Для видалення даних з localStorage ми 
використовуємо метод removeItem(), який 
приймає один аргумент, а саме ключ, за яким
потрібно видалити цей запис з localStorage.

Якщо застосуємо метод clear(), який не потребує
жодних аргументів, то видалимо 
всі записи з localStorage. Так робити не ок!!!
*/ 

// const LS_KEY = "Array of names";
// const names = ["Alice", "Kate", "Emma"];
// localStorage.setItem(LS_KEY, "Alice");
// localStorage.setItem(LS_KEY, JSON.stringify(names))
// const value = localStorage.getItem(LS_KEY);
// console.log(typeof value); // String
// console.log(JSON.parse(value)); // ['Alice', 'Kate', 'Emma']

// localStorage.removeItem(LS_KEY);

// --------------------

/**
* localStorage не може зберігати функції
*/ 

/*
localStorage існує для того, щоб зберігати
дані. Функції зберігати в localStorage не 
зможемо, тому що це спосіб обробки даних. 
*/ 

// function add(a, b) {
//   return a + b;
// }

// localStorage.setItem("foo", add);
// const myFoo = localStorage.getItem("foo");
// console.log(typeof myFoo); // string
// console.log(myFoo(1, 2)); 
// // Uncaught TypeError: myFoo is not a function

// ----------------

// function add(a, b) {
//   return a + b;
// }

// localStorage.setItem("foo", add);
// const myFoo = localStorage.getItem("foo");
// // пробуємо розпарсити
// console.log(JSON.parse(myFoo)); 
// // Uncaught SyntaxError is not valid JSON

// -----------------------

/*
В такому випадку отримаємо undefined, тому що 
не можна функцію перетворити у валідний JSON 
і в localStorage потрапляє рядок undefined.
*/ 
// function add(a, b) {
//   return a + b;
// }

// localStorage.setItem("foo", JSON.stringify(add));
// const myFoo = localStorage.getItem("foo");
// console.log(myFoo); // undefined


// -------------------

/* 
Методи обєктів не потрапляють до localStorage,
вони просто ігноруються. localStorage існує
для того, щоб зберігати дані.
*/ 

// const calc = {
//   a: 5,
//   b: 10,
//   add() {
//     return this.a + this.b;
//   },
// }

// localStorage.setItem("obj", JSON.stringify(calc));
// console.log(JSON.parse(localStorage.getItem("obj")));
// // {a: 5, b: 10}




