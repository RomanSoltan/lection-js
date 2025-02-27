/* ======================================================================================================================
Авторизація запитів за ключами
====================================================================================================================== */

/**
 * Авторизація запитів за ключами
 * Які бувають
 * - у query string
 * - у хедерах
 * 
 * для прикладу використовуємо https://pixabay.com/api/docs/
 */

/*Бувають випадки, коли сервер хоче нас ідентифікувати. 
Ми повинні зареєструватися на сервері, щоб отримати дані,
після чого він надасть нам ключ. 
Спробуємо передати певні налаштувння нашому серверу

Маємо метод encodeURIComponent, який порібен для того, щоб 
у запиті валідно використовувалися 2 рядочки

А є ще простіший спосіб. Ми можемо всі параметри винести
у URLSearchParams*/ 

// const API_KEY = "47381624-f2c157926f525f6b292de8ebe";

// // 1. Отримаємо список
// const list = document.querySelector(".list");
// // 4. Всі параметри запиту винесемо у змінну
// const params = new URLSearchParams({
//   key: API_KEY,
//   q: "red rose"
// });
// // 2. Відправимо запит на сервер
// fetch(`https://pixabay.com/api/?${params}`)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(res.statusText);
//     }
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//     list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
//   })
//   .catch(error => console.log(error));

// // 3. Створимо функцію, яка буде відмальовувати 
// // зображення, які отримали з сервера
// function createMarkup(arr) {
//   return arr.map(({ id, previewURL, tags }) => `
//     <li data-id="${id}">
//       <img src="${previewURL}" alt="${tags}" width="300">
//     </li>
//   `).join("");
// }

/* ======================================================================================================================
Передача ключа в headers
====================================================================================================================== */

/*Інколи ключ потрібно передати не в URLSearchParams,
треба передати в headers. Як це може виглядати?

Метод fetch може опційно приймати другий аргумент і 
це буде обєкт. І якщо нам потрібен ключ в headers,
то тут ми його і прописуємо. У прикладі внизу показано
яким чином може виглядати відправлення ключа на сервер*/

// const API_KEY = "47381624-f2c157926f525f6b292de8ebe";

// fetch("https://pixabay.com/api/", {
//   headers: {
//     Authorization: `Bearer ${API_KEY}`
//   }
// })