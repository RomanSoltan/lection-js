/**
 * - Показуємо та ховаємо, додаючи/видаляючи клас is-visible
 * - Ховаємо через певний час
 * - Ховаємо при кліці
 * - Не забуваємо чистити таймер
 */


const NOTIFICATION_DELAY = 3000;

// 1. Отримаємо доступ до елемента
const notification = document.querySelector(".js-alert");
// 6. Додамо слухач події click на елемент
notification.addEventListener("click", handleClick);
// 10. створимо глобальну змінну для id setTimeout,
// для того, щоб мати можливість достукатися до неї
// в будь-якому місці мого коду
let timeId = null;

// 2. Створимо функцію, де будемо звертатися до 
// елемента і додавати до нього клас is-visible
function showNotification() {
  // 3. додаємо клас is-visible до елемента
  notification.classList.add("is-visible");
  // 4. Ховаємо через певний час елемент і 
  // присвоюємо у змінну числовий id setTimeout
  timeId = setTimeout(() => {
    console.log("hidden"); // перевірка чи працює
    // 5. видаляємо клас is-visible у елемента
    hideNotification();
  }, NOTIFICATION_DELAY)
};

// 7. Створимо колбек handleClick, яка повинна звертатися
// до елементу і видаляти з нього клас is-visible при кліці
function handleClick() {
  // 9. видаляємо клас is-visible у елемента
  hideNotification();
  // 11. зупиняємо setTimeout і чистимо таймер
  clearTimeout(timeId);
}

// 8. Створимо фукцію, яка буде видаляти клас is-visible
function hideNotification() {
  notification.remove("is-visible");
}

showNotification();