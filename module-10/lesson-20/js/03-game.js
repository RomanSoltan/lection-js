/**
 * Напиши програмне забезпечення для ігрового автомата.
 * Для вирішення завдання використай готову розмітку HTML та базову стилізацію.
 *
 * Після натиснення на кнопку "Start game"
 * в кожному віконці по черзі має з'являтись
 * смайлик з затримкою в 1 секунду ('🤑' або '👿')
 *
 * Під час обробки кожного віконця створи масив з Promis-ами
 * в якому кожен з них буде відповідати за своє віконце,
 * після чого оброби даний масив за допомогою методу Promise.allSettled
 *
 * Після того як всі віконця були заповнені потрібно
 * щоб скріпт автоматично визначав чи гравець переміг, чи ні.
 * Якщо в кожному віконці однаковий смайлик це означає що користувач переміг
 *
 * В поле result виводить повідомлення про статус гри ('Winner' або 'Loser')
 *
 * Після повторного натискання на кнопку "Start game"
 * поле має очищатись, а гра починатись з початку.
 */

// 1. Отримаємо доступ до елементів
const startBtn = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

// 2. Повісимо слухач події а startBtn
startBtn.addEventListener("click", handleStart);

// 3. Створимо функцію handleStart
function handleStart() {
  // 16. Зробимо кнопку активною
  startBtn.disabled = true;
  // 14. Очистимо повідомлення про результат при кліку на кнопку
  result.innerHTML = "";
  // 4. Cтворимо новий масив з промісами такої самої довжини,
  // на основі кількості елементів.
  // З допомогою спред-оператора перетворимо псевдомасив у масив
  const promises = [...container.children].map(() => {
    // 5. Повернемо з колбек проміс
    return new Promise((resolve, reject) => {
      // 6. Зробимо, щоб рандомно вибирався смайлик
      const random = Math.random();
      if (random > 0.5) {
        resolve("🤑");
      } else {
        reject("😜");
      }
    });
  });
  // 7. Обробимо проміси з допомогою методу Promise.allSettled
  Promise.allSettled(promises).then((items) => {
    // 12. Реалізуємо процес визначення результату у грі
    const isWinner =
      items.every((item) => item.status === "fulfilled") ||
      items.every((item) => item.status === "rejected");
    // 8. переберемо масив обєктів, який утвориться завдяки allSettled
    items.forEach((item, i) => {
      // 11. Очистимо віконця від смайлів після натисканням на кнопку
      // для заповнення новими смайлами
      container.children[i].textContent = "";
      // 9. Зробимо затримку, щоб смайли зявлялися по черзі через 1s
      setTimeout(() => {
        // 10. Додамо до кожного віконечка смайлик
        container.children[i].textContent = item.value || item.reason;
        // 13. Виведемо користувачу повідомлення про результат, коли
        // зявиться останній смайлик
        if (i === items.length - 1) {
          result.innerHTML = isWinner ? "You Win" : "You Lose";
          // 15. Зробимо кнопку неактивною після кліку на неї
          startBtn.disabled = false;
        }
      }, 1000 * (i + 1));
    });
  });
}

/* ======================================================================================================================
Код гри без коментарів
====================================================================================================================== */

// const startBtn = document.querySelector(".start-btn");
// const container = document.querySelector(".container");
// const result = document.querySelector(".result");

// startBtn.addEventListener("click", handleStart);

// function handleStart() {
//   startBtn.disabled = true;
//   result.innerHTML = "";

//   const promises = [...container.children].map(() => {
//     return new Promise((resolve, reject) => {
//       const random = Math.random();

//       if (random > 0.5) {
//         resolve("🤑");
//       } else {
//         reject("😜");
//       }
//     });
//   });

//   Promise.allSettled(promises).then((items) => {
//     const isWinner =
//       items.every((item) => item.status === "fulfilled") ||
//       items.every((item) => item.status === "rejected");

//     items.forEach((item, i) => {
//       container.children[i].textContent = "";

//       setTimeout(() => {
//         container.children[i].textContent = item.value || item.reason;

//         if (i === items.length - 1) {
//           result.innerHTML = isWinner ? "Winner" : "Loser";
//           startBtn.disabled = false;
//         }
//       }, 1000 * (i + 1));
//     });
//   });
// }


