/* ======================================================================================================================
Колекції та групи
====================================================================================================================== */

/*База даних може зберігати колекції, що містять 
тисячі записів. Наприклад, у нас є застосунок для 
перегляду постів. Чи доцільно виводити відразу всю 
колекцію постів під час кожного запиту, адже вона 
може становити тисячі? Авжеж, ні.


Почнемо з того, що обробка такої великої кількості 
даних у відповіді і їх відображення в інтерфейсі 
вимагає значних обчислювальних ресурсів пристрою, 
на якому відкривається вебсторінка. Розмір відповіді 
може бути настільки великим, що час на отримання 
відповіді триватиме декілька секунд. Адже чим більше 
даних у відповіді від сервера, тим триваліше вона 
передається по мережі. Крім того, зазвичай 
користувачі не потребують бачити всі результати одночасно.


Отже, виводити всю колекцію при кожному GET-запиті 
є занадто витратним з погляду ресурсів.


Розглянемо більш детально ситуацію, де наш сервер 
my-api.com зберігає колекцію постів у ресурсі /posts. 
Колекції можуть бути дуже великими.

Для зручності сприйняття у прикладі ми розберемо 
12 постів, але їх може бути кілька тисяч.

Повернення колекції з усіх постів буде ресурсозатратним 
не тільки для браузера, але й для сервера, що 
призводитиме до затримок під час обміну даними між ними.


Для розв’язання цих проблем існує практика 
використання пагінації.


Пагінація передбачає, що сервер повертає не всю 
колекцію, а лише певну частину записів при кожному 
GET-запиті. Пагінацію реалізують на сервері та 
використовують її на клієнтському боці завдяки 
спеціальним параметрам у запиті.


Для прикладу роботи з колекцією даних ми 
використовуємо публічний JSONPlaceholder API 
та отримуємо масив постів з ендпоінта /posts.*/

// import axios from "axios";

// const fetchPosts = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts"
//   );
//   console.log("Posts:", response.data);
// } 

// fetchPosts();

/* ======================================================================================================================
Кількість елементів у відповіді
====================================================================================================================== */

/*Перший параметр визначає кількість елементів у 
відповіді від сервера.

У нашому випадку цей параметр називається per_page. 
Стандартні назви параметрів пагінації не 
існують, тому їхні імена залежать від 
розробника серверної частини.


Під час такого GET-запиту сервер повертає не 
всю колекцію з 12 елементів, а лише перші 4. 
Якщо передати від'ємне значення або значення, 
більше за кількість елементів у колекції, то 
сервер може відреагувати по-різному. Залежно 
від реалізації, сервер може:

  1. проігнорувати їх;
  2. повернути помилку 400 (BAD REQUEST).


Також публічний JSONPlaceholder API підтримує 
пагінацію. Кількість елементів у відповіді 
контролюється параметром _limit.*/

// import axios from "axios";

// const fetchPosts = async () => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=5"
//   );
//   console.log("Posts:", response.data);
//   // Posts: (5) [{…}, {…}, {…}, {…}, {…}]
// }

// fetchPosts();

/* ======================================================================================================================
Живий приклад
====================================================================================================================== */

/*У живому прикладі всього колекція /posts 
налічує 10 000 елементів, і за замовчуванням 
при отриманні групи повертається 5 елементів.


Спробуй змінити значення параметра _limit у 
цьому прикладі і вивчи відповідь сервера в 
інтерфейсі та на вкладці Network.*/ 

// import axios from "axios";

// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// fetchPostsBtn.addEventListener("click", handlerClick);

// async function handlerClick() {
//   try {
//     postList.innerHTML = "";
//     const posts = await fetchPosts();
//     renderPosts(posts);
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function fetchPosts() {
//   // Change the number of items in the group here
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=1000"
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts.map(({ id, title, body, userId }) => {
//     return `
//       <li>
//         <h2 class="post-title">${title.slice(0, 30)}</h2>
//         <p><b>Post id</b>: ${id}</p>
//         <p><b>Author id</b>: ${userId}</p>
//         <p>${body}</p>
//       </li>`
//   }).join("");
//   postList.innerHTML = markup;
// }

/* ======================================================================================================================
Номер групи елементів
====================================================================================================================== */

/*Встановивши бажану кількість елементів у 
відповіді, ми завжди отримаємо однаковий результат: 
перші per_page елементів колекції, так звану 
першу групу або «сторінку».


Другий параметр пагінації контролює зміщення 
всередині колекції, тобто номер групи елементів, 
яку ми хочемо отримати. Якщо сервер реалізує 
пагінацію, то значення цього параметра за 
замовчуванням дорівнює одиниці — перша група 
або «сторінка» елементів. У нашому прикладі 
він називається page.

Змінюючи значення параметра page, ми уточнюємо 
серверу, яку наступну групу елементів ми хочемо 
отримати, і так продовжуємо, доки в колекції не 
закінчаться елементи. Якщо вказати від'ємне 
значення або значення, більше за кількість груп 
у колекції, відповідь сервера залежить від його реалізації.


У JSONPlaceholder API параметр, що контролює 
групу елементів, називається _page.*/

// import axios from "axios";

// const fetchPosts = async() => {
//   const response = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=5&_page=3"
//   );
//   console.log("Posts:", response.data);
//   // Posts: (5) [{…}, {…}, {…}, {…}, {…}]
// }

// fetchPosts();

/* ======================================================================================================================
Живий приклад
====================================================================================================================== */

/*Спробуй змінювати значення параметра _page 
в цьому прикладі і досліджуй відповідь сервера 
в інтерфейсі та на вкладці Network.*/ 

// import axios from "axios";

// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// fetchPostsBtn.addEventListener("click", handleClick);

// async function handleClick() {
//   try {
//     postList.innerHTML = "";
//     const posts = await fetchPosts();
//     renderPosts(posts);
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: 5,
//     // Change the group number here
//     _page: 3
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   console.log(response.data);
  
//   return response.data;
// };

// function renderPosts(posts) {
//   const markup = posts.map(({ id, title, body, userId }) => {
//     return `
//     <li>
//       <h2 class="post-title">${title.slice(0, 30)}</h2>
//       <p><b>Post id</b>: ${id}</p>
//       <p><b>Author id</b>: ${userId}</p>
//       <p class="post-body">${body}</p>
//     </li>
//     `
//   }).join("");
//   postList.innerHTML = markup;
// }

// -------------------------

/*Щоб визначити, коли елементи в колекції закінчаться, 
і вивести користувачу повідомлення про це, сервер 
може повертати не тільки масив елементів, але й:

  1. метадані про доступну кількість груп, що 
залежить від значення параметра per_page,

або

  2. просто загальну кількість елементів у колекції.


У цьому випадку обчислення кількості груп 
залишається на плечах розробника фронтенда. 
На жаль, JSONPlaceholder API не надає цю інформацію.*/ 

/* ======================================================================================================================
Прийом «Завантажити ще»
====================================================================================================================== */

/*Для динамічної зміни номера групи при 
кожному наступному запиті використовується т
ака послідовність дій.


  1. Оголосимо ще одну глобальну змінну, назвемо 
її page і встановимо початкове значення 1 — 
перша група елементів.
  2. Після кожного успішного запиту в 
обробнику методу then() ми будемо збільшувати 
значення page на одиницю. Потім ми використовуємо 
це значення при складанні параметрів запиту.*/ 

// import axios from "axios";

// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let perPage = 10;

// fetchPostsBtn.addEventListener("click", handlerClick);

// async function handlerClick() {
//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = "Fetch more posts";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: perPage,
//     _page: page
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts.map(({ id, title, body, userId }) => {
//     return `
//     <li>
//       <h2 class="post-title">${title.slice(0, 30)}</h2>
//       <p><b>Post id</b>: ${id}</p>
//       <p><b>Author id</b>: ${userId}</p>
//       <p class="post-body">${body}</p>
//     </li>
//     `
//   }).join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }


/*Після завантаження першої групи елементів 
текст на кнопці зміниться, а сама кнопка 
опуститься під список постів. Коли користувач 
прокрутить сторінку і натисне на кнопку 
"Завантажити ще" знову, виконається запит за 
другою групою елементів, яка додасться до вже 
існуючого списку постів.*/ 

/* ======================================================================================================================
Перевірка кінця колекції
====================================================================================================================== */

/*Відсутність постів для завантаження під час 
кліку на кнопку "Fetch posts" означає, що 
користувач досяг кінця колекції. Коли це 
трапляється, необхідно відобразити сповіщення.

Для цього ми використовуємо бібліотеку iziToast.


Розглянемо живий приклад, де ми додали 
функціонал перевірки кінця колекції.*/ 

// import axios from "axios";
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";

// const fetchPostsBtn = document.querySelector(".btn");
// const postList = document.querySelector(".posts");

// // Controls the group number
// let page = 1;
// // Controls the number of items in the group
// let limit = 40;
// // In our case total number of pages is calculated on frontend
// const totalPages = Math.ceil(100 / limit);

// fetchPostsBtn.addEventListener("click", handlerClick);

// async function handlerClick() {
//    // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return iziToast.error({
//       position: "topRight",
//       message: "We're sorry, there are no more posts to load"
//     });
//   }

//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = "Fetch more posts";
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function fetchPosts() {
//   const params = new URLSearchParams({
//     _limit: limit,
//     _page: page
//   });

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?${params}`
//   );
//   return response.data;
// }

// function renderPosts(posts) {
//   const markup = posts
//     .map(({ id, title, body, userId }) => {
//       return `<li>
//           <h2 class="post-title">${title.slice(0, 30)}</h2>
//           <p><b>Post id</b>: ${id}</p>
//           <p><b>Author id</b>: ${userId}</p>
//           <p class="post-body">${body}</p>
//         </li>`;
//     })
//     .join("");
//   postList.insertAdjacentHTML("beforeend", markup);
// }



/*Ми додали перевірку кінця колекції на фронтенді, 
оскільки JSONPlaceholder API не реалізує цей 
функціонал на бекенді. У нашому випадку достатньо 
розділити загальну кількість елементів у колекції 
(100) на кількість елементів в одній групі.*/ 

// // Контролює кількість елементів в групі
// let limit = 30;
// // Кількість груп в колекції
// const totalPages = Math.ceil(100 / limit);

/*Це схоже на випадок, коли бекенд повертає не 
кількість доступних сторінок, а загальну 
кількість елементів у колекції.


Перед кожним наступним запитом ми порівнюємо 
поточний номер групи і загальну кількість груп 
і виводимо сповіщення, не виконуючи HTTP-запиту.*/ 

// if (page > totalPages) {
//   return iziToast.error({
//     position: "topRight",
//     message: "We're sorry, there are no more posts to load"
//   });
// }

