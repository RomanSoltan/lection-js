// const STORAGE_KEY = "feedback-msg";

// // 1. Отримаємо доступ до елементів
// const form = document.querySelector(".feedback-form");
// const textarea = form.querySelector("textarea");
// // 11. Вішаємо слухач події на форму
// form.addEventListener("submit", handleSubmit);
// // 2. Вішаємо слухач події на textarea 
// textarea.addEventListener("input", onTextareaInput);
// // 10. Викликаємо функцію populateText(), яка при
// // оновленні сторінки збереже в textarea актуальне
// // значення, яке ввів користувач
// populateText();

// // 12. Створимо функцію handleSubmit
// function handleSubmit(event) {
//   // 13. Скасовуємо стандартну поведінку форми
//   event.preventDefault();
//   console.log("Відправляю форму");
//   // 14. Очищаємо форму
//   event.currentTarget.reset();
//   // 15. Видаляємо повідомлення зі сховища
//   localStorage.removeItem(STORAGE_KEY);
// }

// // 3. Створимо функцію onTextareaInput
// function onTextareaInput(event) {
//   // 4. Отримуємо значення поля
//   const value = event.target.value;
//   // 5. Зберігаємо його в сховище
//   localStorage.setItem(STORAGE_KEY, value);
// }

// // 6. Створимо функцію populateText, яка записує
// // значення з localStorage в текстовий інпут після
// // оновлення сторінки
// function populateText() {
//   // 7. Отримуємо значення зі сховища
//   const message = localStorage.getItem(STORAGE_KEY);
//   // 8. Якщо там щось було, оновлюємо DOM
//   if(message) {
//     // 9. записуємо значення з localStorage в текстовий інпут
//     textarea.value = message;
//   }
// }