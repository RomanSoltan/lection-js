"use strict";

// Контекст виконання функції
// Ключове слово this

// const user = {
//   username: "Victor",
//   showName() {
//     // ❌ Віктор біжить швидко, тому що Віктор намагається зловити поїзд
//     console.log(user.username);
//   },
// };

// user.showName();

// const user = {
//   username: "Victor",
//   showName() {
//     // ✅ Віктор біжить швидко, тому що він (this) намагається зловити поїзд.
//     console.log(this.username);
//   },
// };

// user.showName();

// -------------------------------------------------

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked"));
// // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats"));
// // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike"));
// // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese"));
// // "Sorry, there is no pizza named «Viennese»"

// Метод checkPizza об'єкта pizzaPalace використовує this
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

// -----------------------------------------------------

// Глобальний контекст

// function foo() {
//   console.log(this);
// }

// foo(); // window

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo(); // undefined

// ---------------------------------

// Контекст методу об'єкта

// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   }
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

// "use strict";

// const book = {
// 	updateAuthor(newAuthor) {
// 		// ...
// 	}
// };

// book.updateAuthor("Jacob");

// const book = {
// 	updateTitle(newTitle) {
// 		// ...
// 	}
// };

// const update = book.updateTitle;

// update("Lord Of The Rings");

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

// function showName() {
// 	console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };

// showName.call(user);

// function greet(name) {
//   console.log(`Hello, ${name}! I am ${this.person}`);
// }

// const person = "John";
// const context = {
//   person: "Alice"
// };

// greet.call(context, "Bob");

// -------------------------------------------------

// Метод apply()

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// --------------------------------------------------

// Метод bind() і втрата контексту

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'username')

// Зберегли посилання на метод sayHello у змінну greet
// При виклику greet() контекст втрачено, функція викликається в глобальному контексті, тому значення this буде undefined

// При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, оскільки undefined — це навіть не об'єкт

// Це можна виправити, прив'язавши контекст за допомогою методу bind.

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

// function sayHello(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// const user = {
//   name: "Alice"
// };

// const greet = sayHello.bind(user);

// greet("Hello"); // "Hello, Alice!"

// ------------------------------------------------

// Метод bind() і колбеки

// "use strict";

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
// 	const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

// Вирішення проблеми

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
// 	const username = callback();
// 	console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"



// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// const showBooks = library.logBookCount.bind({ books: 724 });

// showBooks(); // 724


// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount); // TypeError



// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }


// showBooks(library.logBookCount.bind(library));

// ----------------------------------------------------

// Стрілочні функції

// Стрілочні функції також ігнорують наявність суворого режиму.

// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis(); // this in showThis: window




// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext(); // this in showThis: window




// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}



// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis.call({ username: "Mango" }); // this in showThis: window
// showThis.apply({ username: "Mango" }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: "Mango" }); 
// boundShowThis(); // this in showThis: window



// Що треба запам’ятати про this у стрілочних функціях?

// 1.Контекст **this** усередині стрілочної функції
//  визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.



// const a = () => {
// 	console.log(this);
// };

// function b() {
// 	a();
// }

// b.call({ user: "Mango" });

// ---------------------------------------------------------------

// Алгоритм визначення this

// Ключове слово this — це одна з найзаплутаніших концепцій для новачка.
// Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.
// Але все стає значно простішим, коли є простий алгоритм визначення значення this.

// Крок 1
// Це стрілочна функція?
// Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
// Якщо відповідь Ні, переходь на Крок 2

// Крок 2
// Чи використовуються методи call, apply або bind?
// Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
// Якщо відповідь Ні, переходь на Крок 3

// Крок 3
// Функція викликається як метод об’єкта object.method?
// Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
// Якщо відповідь Ні, переходь на Крок 4

// Крок 4
// Скрипт виконується в суворому режимі?
// Якщо відповідь Так, значення this — undefined
// Якщо відповідь Ні, значення this — window

// -------------------------------------------------------

// Прототипи

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// ---------------------------------------------------

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname")); //true
// console.log(parent.hasOwnProperty("heritage"));//true
// console.log(child.hasOwnProperty("name"));//true
// console.log(child.name); // "Jason"
// console.log(child.hasOwnProperty("age"));//true
// console.log(child.age); // 27
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // "Moore"
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // "Irish"
// console.log(parent.isPrototypeOf(child)); // true

// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Використовується метод Object.create()
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true

// -------------------------------------------------------

// Перевірка прототипу

// objA.isPrototypeOf(objB)



// const customer = {
// 	username: "Jacob"
// };

// const animal = { 
// 	legs: 4 
// };

// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

// -------------------------------------------------------

// Власні і невласні властивості

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false

// --------------------------------------------

// Перебір власних властивостей

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }


// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// for (const key in dog) {
// 	if(dog.hasOwnProperty(key)) {
// 		console.log(key); // "name"
// 	}
// }



// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for(const key of Object.keys(dog)) {
// 	console.log(key); // "name"
// }

// ---------------------------------------

// Ланцюжки прототипів

// const objC = { c: "objC prop" };

// const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// console.log(objA.hasOwnProperty("a")); // true
// console.log(objA.a); // "objA prop"

// console.log(objA.hasOwnProperty("b")); // false
// console.log(objA.b); // "objB prop"

// console.log(objA.hasOwnProperty("c")); // false
// console.log(objA.c); // "objC prop"

// console.log(objA.hasOwnProperty("x")); // false
// console.log(objA.x); // undefined

// ----------------------------------------------------

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;


// console.log(ancestor.isPrototypeOf("parent")); // false
// console.log(parent.isPrototypeOf("child")); // false
// console.log(ancestor.hasOwnProperty("surname")); // true
// console.log(ancestor.surname); // "Dawson"
// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.surname); // "Moore"
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // "Moore"
// console.log(ancestor.hasOwnProperty("heritage")); // true
// console.log(ancestor.heritage); // "Irish"
// console.log(parent.hasOwnProperty("heritage")); // false
// console.log(parent.heritage); // "Irish"
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // "Irish"

// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.
// Виклик ancestor.isPrototypeOf("parent") повертає false
// Виклик parent.isPrototypeOf("child") повертає false
// Виклик ancestor.hasOwnProperty("surname") повертає true
// Звернення до ancestor.surname повертає "Dawson"
// Виклик parent.hasOwnProperty("surname") повертає true
// Звернення до parent.surname повертає "Moore"
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик ancestor.hasOwnProperty("heritage") повертає true
// Звернення до ancestor.heritage повертає "Irish"
// Виклик parent.hasOwnProperty("heritage") повертає false
// Звернення до parent.heritage повертає "Irish"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Використовується метод Object.create()

// ---------------------------------------------

// Кінець ланцюжка прототипів - це посилання на 
// глобальний клас Object

// const objB = {
// 	b: "objB prop"
// };

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA);

// -------------------------------------------------

// ООП

// Процедурне програмування

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// --------------------------------

// Об'єктно-орієнтоване програмування

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();

// ------------------------------------------

// Класи
// Оголошення класу

// class User {
//   // Тіло класу
// }

// Класи прийнято називати з великої 
// літери, а в назві відображати тип 
// об'єкта (іменника), що створюється.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// -----------------------------------------------

// Використовуючи ключове слово class, оголоси 
// клас Car з порожнім тілом.

// class Car {};

// console.log(new Car());


// Оголошений клас Car
// Результат виклику new Car() - це порожній об'єкт

// -----------------------------------------

// Конструктор класу

// class User {
//   // Синтаксис оголошення методу класу
//   constructor() {
// 		// ...
//   }
// }


// class User {
//   constructor() {
// 		console.log("constructor call")
//   }
// }

// const mango = new User(); // "constructor call"
// console.log(mango); // {}


// class User {
//   constructor(name, email) {
// 		console.log(name, email);
//   }
// }

// const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
// console.log(mango); // {}


// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// -------------------------------------------------------


// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   };
// };

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X5", 58900));
// console.log(new Car("Nissan","Murano", 31700));

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}

// ----------------------------------------------------------

// Об'єкт параметрів

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango); 
// // { name: "Mango", email: "mango@mail.com" }

// -------------------------------------------------------

// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт {brand: "Audi", model: "Q3", price: 36000}
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 }) утвориться об'єкт {brand: "BMW", model: "X5", price: 58900}
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт {brand: "Nissan", model: "Murano", price: 31700}

// --------------------------------------------------------

// Методи класу

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   // Метод getEmail
//   getEmail() {
// 		// ...
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
// 		// ...
//   }
// }

// ----

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"

// --------------------------------------

// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// const mango = new Car({ 
//   brand: "Nissan", 
//   model: "Murano",
//   price: 15000, 
//   });

//   mango.changePrice(50000);
// console.log(mango);

// console.log(mango.getPrice());


// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// --------------------------------------------------

// Прототип екземпляру

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail());  // “mango@mail.com”


// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

// Приватні властивості

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango.name); // "Mango"
// console.log(mango.#email); // Виникне помилка, це приватна властивість


// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

// -----------------------------------

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// class Car {

//   #brand;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }


// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }));
// // { model: "Q3", price: 36000 }
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));
// // { model: "X5", price: 58900 }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }));
// // { model: "Murano", price: 31700 } 

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 }) утвориться об'єкт { model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 }) утвориться об'єкт { model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 }) утвориться об'єкт { model: "Murano", price: 31700 }
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"

// -------------------------------------------------

// Приватні методи

// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

// // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

// // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"




// class User {
//   name;
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

// -------------------------------------

// Геттери і сеттери

// class User {
//   #email;

//   constructor(params) {
//     this.name = params.name;
//     this.#email = params.email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }


// const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.email); // mango@mail.com

// mango.email = "mango@supermail.com";

// console.log(mango.email); // mango@supermail.com

// -------------------------------------------------

// Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

// class Car {
//   #brand;
//   #model;
//   #price;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.#model = params.model;
//     this.#price = params.price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


// Оголошений клас Car
// В класі Car оголошена приватна властивість brand
// В класі Car оголошена приватна властивість model
// В класі Car оголошена приватна властивість price
// Конструктор класу приймає параметр params, який є об'єктом з властивостями brand, model і price
// В класі Car оголошений геттер brand
// В класі Car оголошений сеттер brand
// В класі Car оголошений геттер model
// В класі Car оголошений сеттер model
// В класі Car оголошений геттер price
// В класі Car оголошений сеттер price

// -----------------------------------------------

// Статичні властивості

// class MyClass {
// 	static myProp = "value";
// }

// console.log(MyClass.myProp); // "value"

// class MyClass {
// 	static myProp = "value";
// }

// const inst = new MyClass();
// console.log(inst.myProp); // undefined



// class User {
//   static roles = {
//     admin: "admin",
//     editor: "editor",
// 		basic: "basic"
//   };

//   #email;
//   #role;

//   constructor(params) { 
//     this.#email = params.email; 
//     this.#role = params.role || User.roles.basic; 
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.roles.admin,
// });

// console.log(mango.role); // "admin"
// mango.role = User.roles.editor;
// console.log(mango.role); // "editor"



// class MyClass {
// 	static b = 5;

// 	constructor(value) {
// 		this.a = value;
// 	}
// }

// const instance = new MyClass(10);
// console.log(instance.b);

// ----------------------------------------------

// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {

//   static maxPrice = 50000;

//   #price;

//   constructor(params) {
//     this.#price = params.price || Car.maxPrice;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice <= Car.maxPrice) {
//     this.#price = newPrice;
//     }

//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// Оголошений клас Car
// Клас Car містить статичну властивість maxPrice
// Значення статичної властивості maxPrice - це число 50000
// Екземпляр не містить властивості maxPrice
// В класі Car оголошений геттер price
// В класі Car оголошений сеттер price
// Виклик сеттера price в екземпляра класу, зі значенням аргументу меншим за значення maxPrice, змінює властивість #price
// Виклик сеттера price в екземпляра класу, зі значенням аргументу більшим за значення maxPrice, не змінює властивість #price

// ------------------------------------------------------

// Статичні методи

// class MyClass {
//   static myMethod() {
//     console.log("A static method");
//   }
// }

// MyClass.myMethod(); // "A static method"


// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor(params) {
//     this.#email = params.email;
//     User.#takenEmails.push(params.email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com")); // false
// console.log(User.isEmailTaken("mango@mail.com")); // true

// -----------------------------------------------------

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #maxPrice = 50000;

//   static checkPrice(price) {
//     return price <= Car.#maxPrice 
//       ? "Success! Price is within acceptable limits" 
//       : "Error! Price exceeds the maximum";
//   }

//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок "Error! Price exceeds the maximum"

// ----------------------------------------------

// Наслідування класів

// class Parent {}

// class Child extends Parent {
//   // ...
// }



// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
// 	// Тіло класу ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { #email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// -----------------------------------------------------

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic", 
//     SUPERUSER: "superuser"
//   }
// }

// console.log(Admin);
// console.log(Admin.role.BASIC);
// console.log(Admin.role.SUPERUSER);

// Оголошений клас Admin
// Клас Admin наслідується від класу User
// Клас Admin містить публічну статичну властивість role
// Звернення до Admin.role.BASIC повертає рядок "basic"
// Звернення до Admin.role.SUPERUSER повертає рядок "superuser"

// -----------------------------------------------------------

// Конструктор дочірнього класу

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     // Виклик конструктора батьківського класу User
//     super(params.email); 

//     this.posts = params.posts;
//   }
// }

// const editor = new ContentEditor({ 
// 	email: "mango@mail.com", 
// 	posts: [] 
// });
// console.log(editor); // { #email: "mango@mail.com", posts: [] }
// console.log(editor.email); // "mango@mail.com"

// ------------

// Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.email = params.email;
//     this.access = params.access;
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"
// console.log(Admin.role.BASIC); // "basic"
// console.log(Admin.role.SUPERUSER); // "superuser"

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість role
// Клас Admin містить метод constructor з параметром params
// В класі Admin в конструкторі для властивості email використовується звернення до конструктора батьківського класу
// Звернення до Admin.role.BASIC повертає рядок "basic"
// Звернення до Admin.role.SUPERUSER повертає рядок "superuser"

// ----------------------------------------------------------

// Методи дочірнього класу

// Уявімо, що вище є оголошення класу User

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor(params) {
//     super(params.email);
//     this.posts = params.posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ 
// 	email: "mango@mail.com", 
// 	posts: [] 
// });

// console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }

// editor.addPost("post-1");
// editor.addPost("post-2");
// console.log(editor.posts); // ['post-1', 'post-2']

// ----------------------------------------------------

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = params.blacklistedEmails; 
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
//   blacklistedEmails: [],
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну властивість blacklistedEmails
// Клас Admin містить публічний метод blacklist
// Клас Admin містить публічний метод isBlacklisted
// Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
// Виклик mango.isBlacklisted("mango@mail.com") повертає false
// Виклик mango.isBlacklisted("poly@mail.com") повертає true

// --------------------------------------

// const marriage = {
//   husband: 'Christian',
//   wife: 'Alice',
//   husbandsLastName: 'Verley',
//   wifesLastName: 'Swarowski',
//   changeLastName() {
//     return `And from now on, I announce you, ${this.wife} ${this.wifesLastName}, Missis ${this.husbandsLastName}, as your husband ${this.husband}.`;
//   }
// }
// console.log(marriage);


// function stateMarriage(callback) {
//   const announcement = callback();
//   console.log(`I solemnly announce you husband and wife! ${announcement} You can kiss each other!`);
//   marriage.wifesLastName = marriage.husbandsLastName;
//   console.log(marriage);
// }

// stateMarriage(marriage.changeLastName.bind(marriage));