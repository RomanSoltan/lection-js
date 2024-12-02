/* ======================================================================================================================
Метод GET
====================================================================================================================== */

/* Метод GET відпрацьовує автоматично,
додатково слати на сервер нічого не порібно.
Тіло запиту для методу GET не потрібно*/

// const BASE_URL = "http://localhost:3001/todos";

// // 1. отримаємо дані з серверу
// fetch(BASE_URL)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error))
//   .finally(() => console.log("finally"));

/* ======================================================================================================================
Динамічний парамер
====================================================================================================================== */
/* Динамічний парамер це якщо бачимо дві крапки, 
тобто він може змінюватися*/

// const BASE_URL = "http://localhost:3001/todos/:todoId";

/* ======================================================================================================================
Метод POST
====================================================================================================================== */

/* Метод POST відповідає за створення даних. 
Для Post обовязковим є другий обєкт налаштувань,
який потрібно передати, коли робиться запит на сервер.

Це обєкт, в якому м повинні вказати серверу, що тепер
ми хочемо робити не GET-запит, а запит на створення данних.
Для цього другим аргуметом у fetch ми передаємо обєкт,
в якому вказуємо ключ method з назвою методу POST.
Також, якщо потрібно можа передати headers для службової інфи,
а саме таким чином ми вказуємо серверу у якому форматі ми йому
відправляємо(наразі json-формат) 
і обовязково body, власне що ми хочемо відправити серверу.
Обовязково потрібно дані, які ми відправляємо перетворити
на json-формат.*/

// const BASE_URL = "http://localhost:3001/todos";

// fetch(BASE_URL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   }, // сервер приймає дані у форматі рядка, інакше - err
//   body: JSON.stringify({ title: "Купити молоко", completed: false })
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

/* ======================================================================================================================
Методи PUT i PATCH
====================================================================================================================== */

/*Ці методи існують для того, щоб змінювати дані на сервері
Коли ми робимо запит на зміну цих даних, то повинні
сказати, які саме дані ми повинні змінити. 
Як це робиться?
  1. Для цього порібно вказати id елеметна, який ми хочемо 
змінити. Це потрібно вказати в url при запиті на сервер. 
  2. Далі потрібно другим аргументом передати обєкт з 
налаштуваннями, де прописати назву методу, можна написати
headers, і обовязково тіло, в якому вказати, що саме потрібно
змінити, не забувши огорнути у JSON.stringify(), оскільки 
серверу потрібен рядок
  3. Потім потрібно обробити проміс методами then і catch.

В результаті на сервері отримаємо насупний результат, а саме
метод PUT знайшов елемент по id, та видалив у нього всі його
поля окрім id, оскільки за id він шукає елемент, і далі додав 
ті дані, які були передані в нашому тілі запиту.

Висновок
Mетод PUT затирає всі дані, окрім id, та додає дані, 
які були передані в тілі запиту на сервер.
*/

// const BASE_URL = "http://localhost:3001/todos";

// fetch(`${BASE_URL}/e080`, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "applction/json"
//   },
//   body: JSON.stringify({ completed: true })
// })
//   .then(res => {
//     if (!res.ok) {
//       throw new Error("Ooooops!");
//     }
//     return res.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

/* ======================================================================================================================
Метод PATCH
====================================================================================================================== */

/*Метод PATCH, на відміну від PUT, змінює на сервері лише 
ті дані, які були передані у тілі запиту*/

// const BASE_URL = "http://localhost:3001/todos";

// fetch(`${BASE_URL}/e080`, {
//   method: "PATCH",
//   body: JSON.stringify({ completed: true })
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

/* ======================================================================================================================
Метод DELETE
====================================================================================================================== */

/*Метод DELETE існує для того, щоб видаляти якийсь 
конкретний елемент, використовуючи його id*/

// const BASE_URL = "http://localhost:3001/todos";

// fetch(`${BASE_URL}/e080`, {
//   method: "DELETE"
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.log(error.message));

/* ======================================================================================================================
ЗАДАЧА
====================================================================================================================== */

/*Використаємо тепер наші методи і не тільки для 
зміни інтерфейсу на сторінці*/

const BASE_URL = "http://localhost:3001/todos";
// 1. Отримаємо доступ до елементів
const form = document.querySelector(".todo-form");
// Список, де будуть відмальовуватися todo
const container = document.querySelector(".list");
const btn = document.querySelector(".list__btn")

// 6. Навісимо слухач події на форму і контейнер
form.addEventListener("submit", handlerSubmit);
container.addEventListener("click", handleUpdate);
container.addEventListener("click", handleDelete);

// 3. Створимо функцію, яка буде робити запит на сервер,
// перевіряти чи є помилка чи ні; якщо є - викидати її,
// якщо ні - повертати результатат, який отримано з сервера.
function fetchData(url = BASE_URL, options = {}) {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
// 4. Отримаємо дані з сервера і відмалюємо їх на сторінці
fetchData(BASE_URL)
  .then((data) => container.insertAdjacentHTML("beforeend", createMarkup(data)))
  .catch((error) => console.log(error.message));

// 5. Створимо функцію, яка відмалює дані на сторінці
function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, completed }) => `
    <li data-id="${id}" class="list__item">
      <input type="checkbox" class="list__checkbox" ${completed && "checked"}>
      <h2 class="list__title">${title}</h2>
      <button class="list__btn">X</button>
    </li>
  `
    )
    .join("");
}

// 7. Реалізуємо додавання нового запису у нашу базу даних
// і їх відправлення на сервер
function handlerSubmit(event) {
  event.preventDefault();

  // 8. Витягаємо ключ з вкладених властивостей
  // з допомогою атрибута name (у HTML) через деструктуризацію
  // В todo.value буде зберігатися значення, яке ввів user
  const { todo } = event.target.elements;
  // 9. Відправимо значення, яке ввів user на сервер
  fetchData(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: todo.value, completed: false })
  })
    .then(data => {
      // 10. Відмалюємо на сторінці
      container.insertAdjacentHTML("beforeend", createMarkup([data]))
    })
    .catch(error => console.log(error.message))
    // 11. Очистимо форму введення
    .finally(() => event.target.reset());
}

// 12. Реалізуємо стан виконання завдання, виконано чи ні
function handleUpdate(event) {
  // 13. Перевірка чи містить елемент по якому клікнули певний клас
  if (!event.target.classList.contains("list__checkbox")) {
    return;
  }

  event.preventDefault();

  // 14. Потрібно зрозуміти по якому чекбоксу ми натиснули.
  // Визначимо найближчий батьківський елемент, елемента по якому клікнули
  const parent = event.target.closest(".list__item");
  // 15. Витягнемо id елемента з data-атрибута
  const id = parent.dataset.id;

  // 16. Тепер, знаючи id елемента, у якого потрібно змінити стан
  // checkbox, відправимо ці дані на сервер, тобто будемо змінювати
  // елемент по id
  fetchData(`${BASE_URL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ completed: event.target.checked })
  }) // 17. Змінили значення для чекбокса на сервері і
  // відмалюй а сторінці. Перезапишемо значення властивості checked
    .then(data => event.target.checked = data.completed)
    .catch(error => console.log(error.message));

}

// 18. Функція відповідає за видалення постів
function handleDelete(event) {
  // 19. Перевіримо, що user клікнув на кнопку для видалення
  if (!event.target.classList.contains("list__btn")) {
    return;
  }
  event.target.disabled = true;
  // 20. Потрібно зрозуміти по якому чекбоксу ми натиснули.
  // Визначимо найближчий батьківський елемент, елемента по якому клікнули
  const parent = event.target.closest(".list__item");
  // 21. Витягнемо id елемента з data-атрибута
  const id = parent.dataset.id;

  // 22. Відправимо запит на сервер для того, щоб видалити дані
  fetchData(`${BASE_URL}/${id}`, {
    method: "DELETE"
  }) // Видаляємо елемент
    .then(data => parent.remove())
    .catch(error => console.log(error.message))
    .finally(() => event.target.disabled = false);
}

/* ======================================================================================================================
Задача (код без коментарів)
====================================================================================================================== */

// const BASE_URL = "http://localhost:3001/todos";

// const form = document.querySelector(".todo-form");
// const container = document.querySelector(".list");

// form.addEventListener("submit", handlerSubmit);
// container.addEventListener("click", handleUpdate);
// container.addEventListener("click", handleDelete);

// function fetchData(url = BASE_URL, options = {}) {
//     return fetch(url, options)
//         .then(response => {
//             if(!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         })
// }

// fetchData(BASE_URL)
//     .then(data => container.insertAdjacentHTML("beforeend", createMarkup(data)))
//     .catch(error => console.log(error.message))


// function createMarkup(arr) {
//     return arr.map(({ id, title, completed }) => `
//         <li data-id="${id}" class="list__item">
//             <input type="checkbox" class="list__checkbox" ${completed && "checked"} >
//             <h2 class="list__title">${title}</h2>
//             <button class="list__btn">X</button>
//         </li>
//     `).join("");
// }


// function handlerSubmit(event) {
//     event.preventDefault();

//     const { todo } = event.target.elements;

//     fetchData(BASE_URL, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ title: todo.value, completed: false })
//     })
//         .then(data => {
//             container.insertAdjacentHTML("beforeend", createMarkup([data]))
//         })
//         .catch(error => console.log(error.message))
//         .finally(() => event.target.reset())
// }

// function handleUpdate(event) {
//     if(!event.target.classList.contains("list__checkbox")) {
//         return;
//     }

//     event.preventDefault();

//     const parent = event.target.closest(".list__item");
//     const id = parent.dataset.id;
    
//     fetchData(`${BASE_URL}/${id}`, {
//         method: "PATCH",
//         body: JSON.stringify({ completed: event.target.checked })
//     })
//         .then(data => event.target.checked = data.completed)
//         .catch(error => console.log(error.message))
// }

// function handleDelete(event) {
//     if(!event.target.classList.contains("list__btn")) {
//         return;
//     }

//     const parent = event.target.closest(".list__item");
//     const id = parent.dataset.id;

//     fetchData(`${BASE_URL}/${id}`, {
//         method: "DELETE"
//     })
//         .then(data => parent.remove())
//         .catch(error => console.log(error.message))
// }