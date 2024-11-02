/**
 * Створюємо та додаємо колекцію
 */

// const options = [
//   {label: 'червоний', color: '#f44336'},
//   {label: 'зелений', color: '#4caf50'},
//   {label: 'синій', color: '#2196f3'},
//   {label: 'сірий', color: '#607d8b'},
//   {label: 'рожевий', color: '#e91e63'},
//   {label: 'індіго', color: '#3f51b5'},
// ];

// const colorPickerContainerEl = document.querySelector(".color-picker");

// const elements = options.map((option) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.classList.add("color-picker__option");
//   buttonEl.textContent = option.label;
//   buttonEl.style.backgroundColor = option.color;

//   return buttonEl;
// })

// colorPickerContainerEl.append(...elements);

// ----------------------------------

/**
 * Пишемо функцію для створення розмітки колорпікера
 */

// const options = [
//   {label: 'червоний', color: '#f44336'},
//   {label: 'зелений', color: '#4caf50'},
//   {label: 'синій', color: '#2196f3'},
//   {label: 'сірий', color: '#607d8b'},
//   {label: 'рожевий', color: '#e91e63'},
//   {label: 'індіго', color: '#3f51b5'},
// ];

// const colorPickerContainerEl = document.querySelector(".color-picker");

// const createMarkup = (array) => {
//   return array.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;

//     return buttonEl;
//   })
// }

// colorPickerContainerEl.append(...createMarkup(options));