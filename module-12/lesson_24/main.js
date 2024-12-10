import "./style.css";
import axios from "axios";

// Створи фільмотеку з популярними фільмами, для цього використай
// https://developer.themoviedb.org/reference/trending-movies

// Щоб отримати постер фільму потрібно підставити url з відповіді від бекенду та url з документації
// https://developer.themoviedb.org/docs/image-basics

// Відмалюй картки з фільмами
// Приклад картки  => https://prnt.sc/Hi_iLLg7Nd1F

// Реалізуй пагінацію
// 1 Кнопка "Load More"
// 2 Infinity scroll (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

const BASE_URL = "https://api.themoviedb.org/3";
const END_POINT = "/trending/movie/week";
const API_KEY = "bd6feaa1c9ec927f9266ed03663684b4";

// Отримаємо список куди будемо відмльовувати картки
const container = document.querySelector(".js-movie-list");
// Отримаємо кнопку Load More, відповідає за дозавантаження
const loadMore = document.querySelector(".js-load-more");
// повісимо слухач події на кнопку loadMore
loadMore.addEventListener("click", onLoadMore);

// Створимо змінну, де зберігається номер сторінки
let page = 1;

// Створимо функцію, яка буде
// 1. робити запит на сервер
// 2. чекати поки сервер поверне результат
// 3. обробляти і повертати його з функції
async function serviceMovie(page = 1) {
  // Деструктуруємо зміну, де збережеться результат виклику axios
  const { data } = await axios(`${BASE_URL}${END_POINT}`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
  // повернемо результат з функції
  return data;
}

// Викликаємо ф-ю serviceMovie, яка поверне проміс, отже в
// зовнішньому коді обробляємо then/catch
serviceMovie(page)
  .then((data) => {
    // якщо успішно вімалюємо розмітку на основі отриманих даних
    container.insertAdjacentHTML("beforeend", createMarkup(data.results));
    // Зробимо умову, щоб кнопка не відображалася на останній сторінці,
    // тобто перевіримо чи сторінка не остання
    if (data.page < data.total_pages) {
      // зробимо видимою кнопку Load More
      loadMore.classList.replace("load-more-hidden", "load-more");
    }
  })
  .catch((error) => alert(error.message));

// Створимо функцію, яка буде на основі відповіді з сервера
// відмальовувати картки з фільмами
function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, release_date, original_title, vote_average }) => `
      <li class="movie-card">
        <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
        <div class="movie-info">
          <h2>${original_title}</h2>
          <p>Release Date: ${release_date}</p>
          <p>Vote Average: ${vote_average}</p>
        </div>
      </li>
  `
    )
    .join("");
}

// Створимо функцію, яка буде
// 1. збільшувати зміну page, в якій зберігається значення поточної сторінки
// 2. викликати ф-ю serviceMovie, яка робить запит на сервер
// 3. на основі результата домальовувати розмітку
async function onLoadMore() {
  page++;

  // передбачимо поведінку нетерплячого користувача, щоб при кліку
  // вантажилася одна сторінка
  loadMore.disabled = true;

  try {
    // створимо змінну, і яку будемо чекати поки виконається
    // результат serviceMovie, куди як аргумент передамо page,
    // для того щоб створити нову колекцію з фільмами
    const data = await serviceMovie(page);
    // Відмалюємо дані
    container.insertAdjacentHTML("beforeend", createMarkup(data.results));
    // Приховаймо кнопку, якщо сторінка, яка завтажилася під час
    // натискання на кнопку є остання
    if (data.page >= data.total_pages) {
      // Замінюємо основий клас кнопки на клас, який її приховує
      loadMore.classList.replace("load-more", "load-more-hidden");
    }

    // Завдання з домашки, де порібно зробити скрол на висоту картки
    // Отримаємо картку, коли відмалювалася розмітка
    const card = document.querySelector(".movie-card");
    // console.log(card.getBoundingClientRect());
    const cardHeight = card.getBoundingClientRect().height;
    // для скролу
    window.scrollBy({
      left: 0,
      top: cardHeight * 1.2,
      behavior: "smooth"
    })
  } catch (error) {
    alert(error.message);
  } finally {
    // робимо кнопку активною
    loadMore.disabled = false;
  }
}

// Код без коментарів

// const container = document.querySelector(".js-movie-list");
// const loadMore = document.querySelector(".js-load-more");

// loadMore.addEventListener("click", onLoadMore);

// let page = 1;

// async function serviceMovie(page = 1) {
//   const { data } = await axios(`${BASE_URL}${END_POINT}`, {
//     params: {
//       api_key: API_KEY,
//       page,
//     },
//   });
//   return data;
// }

// serviceMovie(page)
//   .then((data) => {
//     container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//     if (data.page < data.total_pages) {
//       loadMore.classList.replace("load-more-hidden", "load-more");
//     }
//   })
//   .catch((error) => alert(error.message));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//         <li class="movie-card">
//             <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}">
//             <div class="movie-info">
//                 <h2>${original_title}</h2>
//                 <p>Release Date: ${release_date}</p>
//                 <p>Vote Average: ${vote_average}</p>
//             </div>
//         </li>
//     `
//     )
//     .join("");
// }

// async function onLoadMore() {
//   page += 1;
//   loadMore.disabled = true;

//   try {
//     const data = await serviceMovie(page);
//     container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//     if (data.page >= data.total_pages) {
//       loadMore.classList.replace("load-more", "load-more-hidden");
//     }
//   } catch (error) {
//     alert(error.messasge);
//   } finally {
//     loadMore.disabled = false;
//   }
// }

/* ======================================================================================================================
Infinity scroll
====================================================================================================================== */

// // отримаємо доступ до елементів
// const container = document.querySelector(".js-movie-list");
// const guard = document.querySelector(".js-guard");

// // опції для observer
// const options = {
//   root: null,
//   // відстань на якій спрацьовує скрол
//   rootMargin: "300px",
//   // значення у відсотковому співвідношенні, коли спрацьовує скрол
//   // відносно елемента за яким слідкують
//   threshold: 0,
// };

// // observer потрібен для того, щоб слідкувати за якимось елементом.
// // І коли цей елемент стає видимий запусти функцію handlerPagination
// const observer = new IntersectionObserver(handlerPagination, options);

// let page = 1;
// async function serviceMovie(page = 1) {
//   const { data } = await axios(`${BASE_URL}${END_POINT}`, {
//     params: {
//       api_key: API_KEY,
//       page,
//     },
//   });
//   return data;
// }

// serviceMovie(page)
//   .then(data => {
//     container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//     if(data.page < data.total_pages) {
//       observer.observe(guard);
//     }

//   })
//   .catch(error => {
//     alert(error.message);
//   })

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//         <li class="movie-card">
//           <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//           <div class="movie-info">
//             <h2>${original_title}</h2>
//             <p>Release Date: ${release_date}</p>
//             <p>Vote Average: ${vote_average}</p>
//           </div>
//         </li>
//     `
//     )
//     .join("");
// }

// function handlerPagination(entries, observer) {

//   entries.forEach(async (entry) => {
//     if (entry.isIntersecting) {
//       page++;

//       try {
//         const data = await serviceMovie(page);
//         container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//         if (data.page >= data.total_pages) {
//           // припиняємо слідкування за елементом guard
//           observer.unobserve(entry.target);
//         }

//       } catch(err) {
//         alert(err.message);
//       }
//     }
//   })
// }

/* ======================================================================================================================
Pagination with buttons
====================================================================================================================== */

// // отримаємо доступ до елементів
// const container = document.querySelector(".js-movie-list");
// const pag = document.querySelector(".pag");

// pag.addEventListener("click", onLoadMore);

// let page = 1;
// async function serviceMovie(page = 1) {
//   const { data } = await axios(`${BASE_URL}${END_POINT}`, {
//     params: {
//       api_key: API_KEY,
//       page,
//     },
//   });
//   return data;
// }

// serviceMovie(page)
//   .then(data => {
//     container.insertAdjacentHTML("beforeend", createMarkup(data.results));

//   })
//   .catch(error => {
//     alert(error.message);
//   })

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, release_date, original_title, vote_average }) => `
//         <li class="movie-card">
//           <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${original_title}" />
//           <div class="movie-info">
//             <h2>${original_title}</h2>
//             <p>Release Date: ${release_date}</p>
//             <p>Vote Average: ${vote_average}</p>
//           </div>
//         </li>
//     `
//     )
//     .join("");
// }

// async function onLoadMore(event) {
//   // потрібно передбачити, що клікнули по кнопці

//   // Отримаємо контекст кнопки по якій клікнули, це буде наша номер
//   // нашої сторінки для завантаження
//   console.log(event.target.textContent);

//   try {
//     const data = await serviceMovie(event.target.textContent);
//     container.innerHTML = createMarkup(data.results);
//   } catch (err) {
//     alert(err.message);
//   }
// }
