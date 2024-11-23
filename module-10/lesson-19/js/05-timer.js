/**
 * Напишемо клас Timer, який буде
 * запускати та зупиняти відлік часу
 */

// 1. Отримаємо елементи інтерфейсу
const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

// 2. Створимо клас Timer
class Timer {
  // 22. Дуструктуруємо у конструкторі обєкт і витягнемо з нього 
  // властивість, яка зберігається в onTick 
  constructor({ onTick }) {
    // 15. Cтворимо в обєкті властивість, яка буде відповідати за те
    // чи запущений зараз лічильник чи ні
    this.isActive = false;
    // 23. Створимо в обєкті властивість onTick
    this.onTick = onTick;
    // 27. Створимо властвість в яку будемо зберігати
    // числовий id setInterval
    this.intervalId = null
    // 38. Запустимо метод init()
    this.init();
  }

  // 35. Створимо функцію, яка буде одразу 
  // відмальовувати лічильник з нулями, при завантаженні сторінки.
  init() {
    // 36. Створимо обєкт з нулями
    const time = this.getTimeComponent(0);
    // 37. відмалюємо обєкт на сторінці
    this.onTick(time);
  }


  // 3. Створимо метод, який запускає таймер
  start() {
    // 16. Зробимо перевірку, якщо лічильник запущений, то ми 
    // не зможемо його ще раз запустити і припиняємо виконання функції
    if(this.isActive) {
      return;
    }

    // 4. Отримаємо поточний час в момент
    // натискання на кнопку start
    const startTime = Date.now();
    // 17. Переведемо властивість у стан true, яка означає, 
    // що лічильник вже запущений
    this.isActive = true;

    // 5. Потрібно вирахувати скільки часу пройшло з
    // моменту натискання на кнопку до поточного моменту
    // 28. Збережемо у змінну числовий id setInterval
    this.intervalId = setInterval(() => {
      // 6. Отримаємо поточний час
      const currentTime = Date.now();
      // 7. Створимо лічильник, який буде рахувати скільки часу
      // пройшло від моменту, коли натиснули на кнопку до 
      // поточного моменту
      const deltaTime = currentTime - startTime;
      // 13. Збережемо результат виконання фукції getTimeComponent(),
      // яка викликається в контексті обєкту, який буде викликати 
      // функцію, у змінну time. І передамо у функцію, як аргумент
      // кількість мілісекунд deltaTime
      const time = this.getTimeComponent(deltaTime);
      // 24. Відмалюємо таймер на сторінці, для цього викличемо функцію
      // і передамо їй time
      this.onTick(time);

    }, 1000);
  }

  // 29. Створимо функцію, яка буде зупиняти лічильник
  stop() {
    // 30. Зупинимо виконання лічильника
    clearInterval(this.intervalId);
    // 32. Очистимо лічльник
    const time = this.getTimeComponent(0);
    // 33. відмалюємо нулі при натисканні на stop
    this.onTick(time);
    // 34. передаємо властивісті isActive стан false, яка
    // покаже що лічильник уже не запущений
    this.isActive = false;
  }

  // 10. Створимо фукцію, яка буде приймати як параметр кількість 
  // мілісекунд, яка пройшла(deltaTime). Назва параметра довільна(time).
  getTimeComponent(time) {
    // 11. потрібно відокремити секунди, хвилини, години
    // 14. Округлимо значення для сек, хв, год
    // 26. Передамо у функцію pad як аргумент значення сек, хв, год
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    // 12. повернемо все це неподобство з функції у вигляді обєкту
    return { hours, mins, secs };
  }

  // 25. Створимо функцію pad, щоб привести до формату лічильника,
  // яка буде використовувати метод String і padStart, і 
  // приймати якесь value
  pad(value) {
    return String(value).padStart(2, "0");
  }
}

// 8. Створимо екземпляр класу
// 20. Під час створення екземпляру класу передамо якісь аргументи, щоб
// у подальому передати їх в клас
const timer = new Timer({
  // 21. Створимо властивість обєкту onTick буде лежати посилання
  // на функцію updateClockface
  onTick: updateClockface,
});
// 9. Повісимо слухач події клік на кнопку startBtn
startBtn.addEventListener("click", timer.start.bind(timer));
// 31. Повісимо слухач події клік на кнопку stopBtn
stopBtn.addEventListener("click", timer.stop.bind(timer));

// 18. Створимо функцію, яка приймає обєкт як параметр, 
// для відмалювання лічильника
function updateClockface({ hours, mins, secs }) {
  // 19. Звернемося до тегу р і запишемо у нього якесь значення
  clockface.textContent = `${hours}:${mins}:${secs}`;
}

/* ======================================================================================================================
Напишемо те саме, але з допомогою функцій
====================================================================================================================== */

const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");
const clockface = document.querySelector(".clockface");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

init();

let isActive = false;
let intervalId = null;

function start() {
  if(isActive) {
      return;
  }

  const startTime = Date.now();
  isActive = true;

  intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponent(deltaTime);

      onTick(time);
  }, 1000)
}

function getTimeComponent(time) {
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function onTick({ hours, mins, secs }) {
  clockface.textContent = `${hours}:${mins}:${secs}`;
}

function stop() {
  clearInterval(intervalId);
  const time = getTimeComponent(0);
  onTick(time);
  isActive = false;
}

function init() {
  const time = getTimeComponent(0);
  onTick(time);
}