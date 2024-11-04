/**
 * Події миші
 * - mouseenter i mouseleave (це ховер)
 * - mouseover i mouseout
 * - mousemove (chatty event - балакуча подія)
 */

// const box = document.querySelector(".js-box");

// box.addEventListener("mouseenter", onMouseEnter);
// box.addEventListener("mouseleave", onMouseLeave);

// function onMouseEnter() {
//   console.log("onMouseEnter");
//   box.classList.add("box--active")
// }

// function onMouseLeave() {
//   console.log("onMouseLeave");
//   box.classList.remove("box--active")
// }

// ------------------------

/* Метод mouseover і mouseout чутливі до вкладених
елементів у розмітці HTML. Як тільки ми перетинаємо
кордон вкладеного елемента, ми виходимо і заходимо знову */

// const box = document.querySelector(".js-box");

// box.addEventListener("mouseover", onMouseOver);
// box.addEventListener("mouseout", onMouseOut);

// function onMouseOver() {
//   console.log("mouseover");
// }

// function onMouseOut() {
//   console.log("mouseout");
// }

// -------------------------

/* метод mousemove відслідковує кожен рух
мишки на синьому квадраті, в результаті 
отримуємо обєкт з купою інформації */

// const box = document.querySelector(".js-box");

// box.addEventListener("mousemove", onMouseMove)

// function onMouseMove(event) {
//   console.log(event);
// }
