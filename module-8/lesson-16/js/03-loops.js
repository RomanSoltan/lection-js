/**
 * Деструктуризація обєкта в циклі
 */

/*
Є масив обєктів. Cтворимо змінну names
це буде порожній масив. Тепер потрібно 
циклом for...of пройтися по масиву. У
змінній user буде зберігатися елемент
масиву, а саме обєкт. І тепер, якщо порібно
сформувати масив тільки з іменами, то ми 
використаємо метод масиву push(), щоб на
кожній ітерації додавати імя з елементу 
масиву user.name до нового масиву names.
*/

/**
 * Без деструктуризації
 */
// const users = [{name: "Kate"}, {name: "Alice"}, {name: "Petro"}];

// const names = [];
// for(const user of users) {
//   names.push(user.name)
// }
// console.log(names);

/**
 * З деструктуризацією
 * 1. можна одразу в умові цикла
 * 2. можна в тілі циклу
 */
// const users = [{name: "Kate"}, {name: "Alice"}, {name: "Petro"}];

// const names = [];
// // деструктуризація в циклі 
// for(const { name } of users) {
//   names.push(name);
// }
// console.log(names);

// ----------
// const users = [{name: "Kate"}, {name: "Alice"}, {name: "Petro"}];

// const names = [];
// // деструктуризація в циклі 
// for(const user of users) {
//   const { name } = user;
//   names.push(name);
// }
// console.log(names);

// -------------

// // Використання деструктуризації у map()

// const users = [{name: "Kate"}, {name: "Alice"}, {name: "Petro"}];
// const names = users.map(({ name }) => name);
// console.log(names); // ['Kate', 'Alice', 'Petro']