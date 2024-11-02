// element.querySelectorAll(selector)


// const listWithId = document.querySelector("#menu");
// listWithId.style.textTransform = "uppercase";
// listWithId.style.fontSize = "24px";
// console.log(listWithId);

// const listWithClass = document.querySelector(".menu");
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log(firstMenuItem);

// -------------------------------------------------------------

// const el = document.querySelector(".text")
// const nested = document.querySelector(".sub-text")

// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// el.textContent = "Username: Poly";
// console.log(el.textContent);

// ------------------------------------------------

// const link = document.querySelector(".link");
// console.log(link.classList);

// const hasActiveClass = link.classList.contains("is-active");
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

// ----------------------------------------------

// Створення елементів

// document.createElement(tagName)

// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading); // <h1 class="title">This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// ---------------------------------------------------------

// Додавання елементів

// elem.append(el1, el2, ...) — 
// додає один або декілька елементів після 
// всіх дітей елемента elem.

// elem.prepend(el1, el2, ...) — 
// додає один або декілька елементів перед
// усіма дітьми елемента elem.

// -----------------

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// Зверни увагу! Якщо елемент для додавання вже знаходиться 
// в DOM, то він видаляється зі свого старого місця й додається
// у нове. Отже, є правило: один і той самий елемент не може 
// бути одночасно у двох місцях.

// -----------------------------------------------

// Видалення елементів

// element.remove()

// const text = document.querySelector(".text")
// text.remove();

// ----------------------------------------------------

// Властивість innerHTML

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;


// Використовуй властивість element.innerHTML 
// для додавання тільки у разі, 
// — коли елемент element порожній або
// — якщо потрібно повністю замінити вміст element

// ---------------------------

// Метод insertAdjacentHTML()

// element.insertAdjacentHTML(position, string)

// Аргумент position — це рядок, який визначає 
// позицію щодо елемента element. Він приймає одне з чотирьох значень.

// "beforebegin" — перед element
// "afterbegin" — всередині element, перед усіма дітьми
// "beforeend" — всередині element, після усіх дітей
// "afterend" — після element


