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
      page
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
    if(data.page < data.total_pages) {
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
    
  } catch (error) {
    alert(error.message);
  } finally {
    // робимо кнопку активною
    loadMore.disabled = false;
  }
}