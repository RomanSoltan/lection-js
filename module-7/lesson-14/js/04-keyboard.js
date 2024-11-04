/**
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code.
 */ 

/* Щоб відслідковувати події клавіатури
слухач події потрібно повісити на весь
документ
*/

// document.addEventListener("keypress", handleKeyPress);

// function handleKeyPress(event) {
//   console.log(event.key);
//   /* keypress може прцювати із звичайними символами,
//   але натискання спецсимволів не відловлює */
// }

// --------------

// document.addEventListener("keydown", handleKeyPress);

// function handleKeyPress(event) {
//   // console.log(event.key);
//   // /* keydown відпрацьовує в той момент, коли
//   // кнопка дійшла до нижньої позиції,
//   // може відловлювати спецсимволів */

//   // console.log(event.code);
//   // /* властивість code повертає 
//   // фізичний код клавіші */

//   // if(event.code === "Escape") {
//   //   console.log("escape");
//   // } else {
//   //   console.log(false);
    
//   // }
// }

/* Подія keyup відбувається, коли ми натиснули,
а потім відпустили клавішу. keydown по факту просто
швидше відпрацьовує, все інше бсолютно ідентичне */

// --------------------------------

/** 
 * Обробка комбінацій клавіш
 */ 

// document.addEventListener("keydown", handleKeyPress);

// function handleKeyPress(event) {
//   if(event.ctrlKey && event.code === "KeyC") {
//     console.log("ok");
//     event.preventDefault();
//     /* Припинено дефолтну поведінку при
//     натисканні ctrl + С. Тепер вона не копіює
//     текст в буфер обміну  */ 
//   }
// }
