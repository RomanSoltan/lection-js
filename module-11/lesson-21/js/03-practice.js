// Потрібно створити функціонал для отримання прогнозу погоди в місті.
// Використай публічне API https://www.weatherapi.com/docs/
// Використовуй ендпоінт Forecast для того, щоб отримати прогноз погоди на декілька днів.

// Створи форму в яку користувач:
// 1 вводить назву міста.
// 2 обирає на яку кількість днів він хоче отримати прогноз погоди (3, 5 та 7 днів).
// (Іноді параметр не працює в такому випадку можна зробити пошук на 1, 2 та 3 дні)
// Приклад форми https://prnt.sc/kFmLOj6gBdv-

// Після сабміту форми відмалюй картки з інформацією отриманою з бекенду.
// Картка має містити відомості про:
// 1 Зображення з погодою (icon)
// 2 Текст з погодою (text)
// 3 Дату (date)
// 4 Середню температуру в Цельсія (avgtemp_c)
// Приклад картки https://prnt.sc/h_p-A6Hty-i-

// 1. Винесемо посилання на сервер у змінну
const BASE_URL = "http://api.weatherapi.com/v1";
// 2. Ключ отримаємо на сервері
const API_KEY = "faca8305b56748c1af475147240112";

// 3. Отримаємо доступ до списку, де відмалюємо картки
const list = document.querySelector(".js-list");
// 4. Отримаємо форму, з якої будемо отримувати дані введені userom
const form = document.querySelector(".js-search-form");
// 5. Навісимо на форму слухач події, щоб розуміти, що user вводить
form.addEventListener("submit", handlerSearch);

// 6. Створимо функцію
function handlerSearch(event) {
  event.preventDefault();
  // 7. отримаємо дані, які ввів user у інпути за атрибутом
  // name(city, days) за допомогою деструктуризації
  const { city, days } = event.target.elements;
  // 11. Відправимо ці дані на сервер, щоб отримати результат
  // з погодою, який обробляємо, як проміс
  serviceWeather(city.value, days.value)
    .then((data) => {
      // 13. Викличемо функцію createMarkup і відмалюємо картки
      list.innerHTML = createMarkup(data.forecast.forecastday);
    })
    .catch((error) => {
      // 14. Відмалюємо повідомлення про помилку
      list.insertAdjacentHTML(
        "beforeend",
        `
          <li>${error.message}</li>
        `
      );
    }) // 15. Очистимо форму після натискання на кнопку
    .finally(() => event.target.reset());
}

// 8. Створимо функцію для створення запиту
function serviceWeather(city = "", days = 1) {
  // 9. Створимо searchParams для запиту
  const params = new URLSearchParams({
    key: API_KEY,
    q: city,
    days,
    lang: "uk",
  });
  // 10. Робимо запит на сервер, який повертатимемо з функції
  return fetch(`${BASE_URL}/forecast.json?${params}`).then((response) => {
    if (!response.ok) {
      throw new Error("Ой лишенько!.. Щось пішло не так (:");
    }
    return response.json();
  });
}

// 12. Створимо функцію, яка буде відмальовувати картки
function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `
      <li class="weather-card">
        <img src="${icon}" alt="${text}" class="weather-icon">
        <h2 class="weather-date">${date}</h2>
        <h3 class="weather-text">${text}</h3>
        <h3 class="temperature">${avgtemp_c} °C</h3>
      </li>
  `
    )
    .join("");
}

/* ======================================================================================================================
Код без кометів
====================================================================================================================== */

// const BASE_URL = "http://api.weatherapi.com/v1";
// const API_KEY = "faca8305b56748c1af475147240112";

// const form = document.querySelector(".js-search-form");
// const list = document.querySelector(".js-list");

// form.addEventListener("submit", handlerSearch);

// function handlerSearch(event) {
//     event.preventDefault();

//     const { city, days } = event.target.elements;
    
//     serviceWeather(city.value, days.value)
//         .then(data => {
//             console.log(data);
//             list.innerHTML = createMarkup(data.forecast.forecastday);
//         })
//         .catch(error => {
//             console.log(error.message)
//         })
//         .finally(() => event.target.reset())
// }


// function serviceWeather(city = "", days = 1) {
//     const params = new URLSearchParams({
//         key: API_KEY,
//         q: city,
//         days,
//         lang: "uk"
//     })

//     return fetch(`${BASE_URL}/forecast.json?${params}`)
//         .then(response => {
//             if(!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         })
// }

// function createMarkup(arr) {
//     return arr.map(({ date, day: { avgtemp_c, condition: { text, icon }}}) => `
//         <li class="weather-card">
//             <img src="${icon}" alt="${text}" class="weater-icon">
//             <h2 class="weather-date">${date}</h2>
//             <h3 class="weather-text">${text}</h3>
//             <h3 class="temperature">${avgtemp_c} °C</h3>
//         </li>
//     `).join("");
// }