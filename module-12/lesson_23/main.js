// // Підключеня ключа через env
// console.log(import.meta.env.VITE_API_KEY );

// import axios from "axios";

// import "./style.css";

// const BASE_URL = "http://localhost:3001/todos";

/* ======================================================================================================================
GET-request
====================================================================================================================== */

/*За замовчуванням axios може і так робити get-запит,
тому прописувати get не потрібно, просто в дужках
передати url, за яким потрібно робити запит.

Оскільки це асинхроний запит axios повертає проміс,
який потрібно обробити then i catch. 
  1. axios повертає проміс з обєктом, який then розпарсив. 
  2. У властивості обєкта, яка називається data, 
зберігається результат, який був повернутй сервером.
  3. Не портібно руками перевіряти на наявність 404 помилки.
  4. Робота з searchParams. Можна опційно під час виклику
axios передати другий аргумент, який є обєктом*/

// axios(BASE_URL, {
//   params: {
//     api_key: "lalala",
//     page: 2
//   }
// })
//   .then(response => console.log(response.data))
//   .catch(error => console.log(error.message));

/* ======================================================================================================================
POST-request
====================================================================================================================== */

// 1 спосіб
/*Викликаємо метод post в axios, куди маємо передати 
певні аргументи
  1. url на який робиться запит
  2. Дані, треба відправити на сервер*/

// axios.post(BASE_URL, {
//   title: "Купити хліб",
//   completed: false
// })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err.message));

// ---------------------

// 2 спосіб
/*Викликаємо axios і одразу передаємо в нього
обєкт налаштувань:
  1. url
  2. метод
  3. опційно headers
  4. тіло запиту, в якому зберігаються дані. 
В axios це data, в fetch - body
JSON.stringify - не потрібен. axios перетворить дані сам*/

// axios({
//   url: BASE_URL,
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   data: {
//     title: "Купити хліб",
//     completed: false
//   }
// })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err.message));

/* ======================================================================================================================
PUT 
====================================================================================================================== */

/*Викликаємо метод put, в який передаємо 
два аргументи:
  1. url, за яким робимо запит і повинні
вказати id елемента, який хочемо змінити
  2. Дані, які потрібно змінити
Метод PUT видалив всі дані, окрім id, і 
додав дані, які були відправлені на сервер*/

// axios.put(`${BASE_URL}/90fc`, {
//   completed: true
// })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err.message));

/* ======================================================================================================================
PATCH
====================================================================================================================== */

/*Цей метод максмально аналогічний PUT.
Викликаємо axios і передаємо в нього обєкт
з налаштуваннями:
  1. url
  2. method
  3. headers - опційно
  4. data - які потрібно передати*/

// axios({
//   url: `${BASE_URL}/90fc`,
//   method: "PATCH",
//   data: {
//     completed: true
//   }
// })
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err.message));

/* ======================================================================================================================
DELETE
====================================================================================================================== */

// 1 спосіб
/*Викличемо метод DELETE в axios, в який передамо
url того елемента, який потрібно видалити. І все
DELETE більше нічого не потрібно, далі просто потрібно
обробити результат виконання */

// axios.delete(`${BASE_URL}/90fc`)
//   .then(response => console.log(response))
//   .catch(err => console.log(err.message));

// ------------------

// 2 спосіб
/*Звернемося до axios і передаємо йому обєкт налаштувань:
  1. url
  2. method
  
І обробити проміс*/

// axios({
//   url: `${BASE_URL}/90fc`,
//   method: "DELETE"
// })
//   .then(response => console.log(response.data))
//   .catch(err => console.log(err.message));

/* ======================================================================================================================
ASYNC / AWAIT
====================================================================================================================== */

/*ASYNC / AWAIT це синтаксис , який дає нам 
можливість робити асинхронні функції.

Для того щоб зробити функцію асинхронною
потрібно перед нею написати ключове слово async.
  Якщо цього слова немає, а функція повертає, якесь
значення, то під час виклику функції оримаємо значення, 
яке моя функція повертає.
  Якщо функція є асинхронною, тобто перед нею написано
async, то вона завжди буде повертати ПРОМІС.
*/

// async function foo() {
//   return 5;
// }

// console.log(foo());

// стрілочна функція
// const sum = async () => {}

// ----------------

/*Навіщо воно порібно?

Якщо перед функцією написали ключове слово async, 
тобто зробили функцію асинхронною, то в її тілі
це дає можливість використовувати awaіt, який можна
написати перед якоюсь асинхронною операцією, напр
запитом на сервер. Коли викликаємо функцію, то в її
тілі натикаємося на ключове слово await, і це означає,
що інтерпретатор буде чекати доки код, який написано 
справа від await виконається. Тобто await каже почекай
поки не виконається ось цей код, що стоїть біля мене.
Коли ця дія виконається, тобто коли проміс перейде в 
стан fulfilled або rejected, await бере цей проміс і
розпарсює його і результат цього покладе в змінну.
І поки вся ця процедура буде виконуватися, наш код
всередині функції далі рухатися не буде і ми чекаємо
виконання коду біля await, а оскільки функція асинхронна,
то все що ззовні буде працювати і потік не зупиниться

Висновок.
Ситаксис async/await дає можливість створювати асинхронні
функції, в тілі яких ми можемо чекати, за допомогою 
ключового слова await, виконання певної дії*/

// async function foo() {
//   const response = await axios(BASE_URL);
//   console.log(response.data); // поверне масив обєктів [{…}, {…}, {…}]
// }

// foo();

// console.log("ok");
// // ok в консолі зявиться раніше, оскільки функція foo є асинхронною

/* ======================================================================================================================
Відловлюваня помилок у async/await і використання результату
функції в її тілі
====================================================================================================================== */

/*Для відловлення помилок у нас є синтаксис try/catch
Код, який потенційно може викликати помилку, ми кладемо
в блок try. В блок catch пишемо код, який повинен 
відпрацювати, якщо у нас виникне помилка. 
  Якщо в блоці try на якомусь етапі виникає помилка, то 
код одразу автоматично буде переключений на наш блок catch. 
  Якщо в try все ок, то catch просто ігнорується.
Ось таким чином в асинхронній функції можна 
відловлювати помилки
*/

// async function foo() {
//   try {
//     const response = await axios("http://localhost:3001/todos2")
//     console.log(response.data);
//   } catch(err) {
//     alert(err.message);
//   } finally {
//     console.log("Finally");
//   }
// }

// foo();

/* ======================================================================================================================
Використання результату асинхрона у зовнішньому коді
====================================================================================================================== */

/*Якщо результат асинхроної функції хочемо використати
за її межами, то помилку в ній обробляти не потрібно.
  Якщо використовуємо у зовнішньому коді, тоді обробляємо
результат за допомогою then і catch.
Тут не можна використати async/await, оскільки цей синтаксис
існує для створення асинхронної функції, а так як ми обробляємо
результат асинхронної функціїї(проміс) ззовні, то у нас для
цього є then і catch.

Висновок.
Якщо результат потрібен у зовнішньому коді, то помилку обробляємо
також ззовні за допомогою then і catch.*/

// async function foo() {
//   const response = await axios("http://localhost:3001/todos");
//   return response.data;
// }

// foo()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));

/* ======================================================================================================================
Використання результату асинхронної функції
у іншій асинхронній функції
====================================================================================================================== */

/*Якщо результат асинхроної функції хочемо використати
за її межами, то помилку в ній обробляти не потрібно.
Для використання у іншії асинхронній функції потрібно
також дочекатися виконання попередньої асинхронної функції.
Це можна зробити з допомогою ключового слова await. Також 
потрібно використати конструкцію try/catch для віловлення 
помилок.
*/

// async function foo() {
//   const response = await axios("http://localhost:3001/todos");
//   return response.data;
// }

// async function result() {
//   try {
//     const data = await foo();
//     console.log(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// }

// result();

// --------------------------------

/* ======================================================================================================================
Promise.All() в async/await
====================================================================================================================== */

/*Оскільки при такому підході запити відбувалися всі по черзі, 
і відрацювали послідово, один за одним. Тобто аступий запит на 
сервер не буде відправлений, доки не повернеться відповідь від
попереднього запиту. Така практика може бути проблемою, оскільки
може позначитися на швидкодії сторінки.
  А як тут можна викрутитися? Можна зробити так, щоб запити на 
сервер відбувалися не послідовно, а паралельно, тобто одночасно.
*/

// Послідовні запити на сервер

// async function foo() {
//   const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

//   const todo1 = await axios(`${BASE_URL}/1`);
//   const todo2 = await axios(`${BASE_URL}/2`);
//   const todo3 = await axios(`${BASE_URL}/3`);

//   return [todo1.data, todo2.data, todo3.data];
// }

// foo()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));

// ----------------------------------------------

// Паралельні (одночасні) запити на сервер

// async function foo() {
//   const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
//   const todosArr = [1, 2, 3];

//   const results = todosArr.map( async (item) => {
//     const res = await axios(`${BASE_URL}/${item}`);
//     return res.data;
//   })

//   const todos = await Promise.all(results);
//   return todos;
// }

// foo()
//   .then(data => console.log(data))
//   .catch(err => console.log(err.message));

/* ======================================================================================================================
Задача
====================================================================================================================== */

/*Перепишемо код з минулої лекції з
допомогою axios і async/await*/

import axios from "axios";

import "./style.css";

const BASE_URL = "http://localhost:3001/todos";

const form = document.querySelector(".todo__form");
const container = document.querySelector(".list");

form.addEventListener("submit", handleSubmit);
container.addEventListener("click", handleUpdate);
container.addEventListener("click", handleDelete);

// функція виконує запит на сервер
async function serviceTodos(url = BASE_URL, options = {}) {
  const response = await axios(url, options);
  return response.data;
}

// функція створює розмітку
function createMarkup(arr) {
  return arr
    .map(
      ({ id, title, completed }) => `
    <li class="list__item" data-id="${id}">
      <input type="checkbox" class="list__checkbox" ${
        completed ? "checked" : ""
      }>
      <h2 class="list__title">${title}</h2>
      <button class="list__btn">X</button>
    </li>
  `
    )
    .join("");
}

// Обробимо результат запиту на сервер і відмалюємо розмітку
serviceTodos(BASE_URL)
  .then(data => container.insertAdjacentHTML("beforeend", createMarkup(data)))
  .catch(error => alert(error.message));

async function handleSubmit(event) {
  event.preventDefault();

  /*під цією власивістю зберігаються всі вкладені у форму 
  елементи, які мають атрибут name, і за значенням цього
  атрибуту можна їх звідти витягти*/ 
  const { todo } = event.target.elements;

  if (!todo.value.trim()) {
    return;
  }

  /*Додамо нову справу на сервер і відмалюємо на сторінці*/ 
  try {
    const data = await serviceTodos(BASE_URL, {
      method: "POST",
      data: {
        title: todo.value,
        completed: false
      }
    });
    container.insertAdjacentHTML("beforeend", createMarkup([data]));
    
  } catch(err) {
    alert(err.message);
  } finally {
    event.target.reset();
  }
}

/*Реалізуємо зміну чекбокса на сторінці і на сервері по кліку*/ 
async function handleUpdate(event) {
  if (!event.target.classList.contains("list__checkbox")) {
    return;
  }

  event.preventDefault();

  const parent = event.target.closest(".list__item");
  const id = parent.dataset.id;
  
  try {
    const data = await serviceTodos(`${BASE_URL}/${id}`, {
      method: "PATCH",
      data: {
        completed: event.target.checked
      }
    });
    
    event.target.checked = data.completed;
    
  } catch (err) {
    alert(err.message);
  }
}

/*Реалізуємо видалення елемента списку справ з сервера і сторінки*/ 
async function handleDelete(event) {
  if(!event.target.classList.contains("list__btn")) {
    return;
  }

  const parent = event.target.closest(".list__item");
  const id = parent.dataset.id;

  try {
    await serviceTodos(`${BASE_URL}/${id}`, {
      method: "DELETE"
    })

    parent.remove();
  } catch(err) {
    console.log(err.message);
  }
}