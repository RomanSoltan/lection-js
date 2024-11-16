// // 1. Отримаємо доступ до елеметів
// const container = document.querySelector(".js-list");
// const totalPrice = document.querySelector(".js-total-price");
// const clear = document.querySelector(".js-clear");
// // 11. Реалізуємо можливість очищення кошика 
// // за допомогою кнопки Clear basket
// // 12. Повісимо слухача події на кнопку
// clear.addEventListener("click", handleClick);
// // 13. Створимо коллбек функцію handleClick
// function handleClick() {
//   // 14. Очистимо localStorage
//   localStorage.removeItem(LS_KEY);
//   // 15. У разі очищення кошику реалізуємо перехід
//   // на сторінку з товарами через клік по кнопці.
//   window.location.href = "./03-shop.html";
// }

// const LS_KEY = "basket";
// // 2. Отримаємо дані з localStorage, якщо є, якщо ні, то []
// const products = JSON.parse(localStorage.getItem(LS_KEY)) || [];
// // 3. Створимо змінну totalCost для загальної вартості
// let totalCost;
// // 4. Перевіряємо наявність продуктів у кошику(products)
// // 5. якщо є, то
// if (products.length) {
//   // 6. робимо кнопку очищення кошику видимою
//   clear.hidden = false;
//   // 7. Рахуємо загальу вартість товарів у кошику
//   totalCost = products.reduce((acc, { qty, price }) => (acc += qty * price), 0);
// }

// // 8. Заповнимо поле totalPrice контентом.
// totalPrice.textContent = totalCost
//   ? `Загальна вартість ${totalCost} грн`
//   : "Кошик порожній";
// // 10. Відмалюємо товари з кошика на сторінці.
// container.insertAdjacentHTML("beforeend", createMarkup(products))

// // 9. Створимо розмітку товарів з кошика на сторінці.
// function createMarkup(arr) {
//   return arr.map(({ img, price, qty, name, id }) => `
//     <li class="cart-item" data-id="${id}">
//       <img class="product-img" src="${img}" alt="${name}"/>
//       <h2>${name}</h2>
//       <p>Quantity: ${qty}</p>
//       <p>Total price: ${qty * price} грн</p>
//     </li>
//   `).join("");
// }

