// const instruments = [
//   {
//     id: 1,
//     img: "https://static.dnipro-m.ua/cache/products/7056/catalog_origin_218728.jpg",
//     name: "Шуруповерт",
//     price: 150,
//     description:
//       "Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями.",
//   },
//   {
//     id: 2,
//     img: "https://static.dnipro-m.ua/cache/products/992/catalog_origin_322784.jpg",
//     name: "Шліфмашина",
//     price: 1299,
//     description:
//       "Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування.",
//   },
//   {
//     id: 3,
//     img: "https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",
//     name: "Пила",
//     price: 11049,
//     description:
//       "Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі.",
//   },
//   {
//     id: 4,
//     img: "https://static.dnipro-m.ua/cache/products/2023/catalog_origin_323420.jpg",
//     name: "Рівень",
//     price: 897,
//     description:
//       "Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації.",
//   },
//   {
//     id: 5,
//     img: "https://static.dnipro-m.ua/cache/products/9500/catalog_origin_470179.jpg",
//     name: "Тример",
//     price: 3699,
//     description:
//       "Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм.",
//   },
//   {
//     id: 6,
//     img: "https://static.dnipro-m.ua/cache/products/6483/catalog_origin_325859.jpg",
//     name: "Мотокоса",
//     price: 11049,
//     description:
//       "Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2.",
//   },
//   {
//     id: 7,
//     img: "https://static.dnipro-m.ua/cache/products/4980/catalog_origin_183761.jpg",
//     name: "Генератор",
//     price: 10890,
//     description:
//       "Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос.",
//   },
// ];

// const LS_KEY = "basket";

// // 1. Отримаємо доступ до елементів.
// const container = document.querySelector(".js-list");
// // 3. Відмалюємо елементи на сторінці.
// container.insertAdjacentHTML("beforeend", createMarkup(instruments));
// // 4. Повісимо на container слухач події для її делегування
// container.addEventListener("click", handlerAdd)
// // 2. Створимо функцію, щоб динамічно відмалювати
// // продукти на сторінці.
// function createMarkup(arr) {
//   return arr.map(({ id, img, name, price, description }) => `
//     <li class="product-card js-product" data-id="${id}">
//       <img class="product-img" src="${img}" alt="${name}" />
//       <h2 class="product-title">${name}</h2>
//       <p class="product-description">${description}</p>
//       <p class="product-price">${price} грн</p>
//       <button class="product-add-btn js-btn">Add to basket</button>
//     </li>
//   `).join("");
// }

// // 5. Створимо функцію handlerAdd
// function handlerAdd(event) {
//   // 6. Перевіряємо чи відбувся клік по кнопці з певним класом.
//   if(!event.target.classList.contains("js-btn")) {
//     return;
//   }
//   // 7. Перевіримо, якому продукту належить клік.
//   // 8. Отримаємо батьківський елемент кліка, а саме li.
//   const parent = event.target.closest(".js-product");
//   // 9. Отримали id елемента, по якому ми клікнули.
//   const productId = +parent.dataset.id;
//   // 10. Отримаємо обєкт продукту в масиві за id.
//   // елемента, по якому ми клікнули.
//   const currentProduct = instruments.find(({ id }) => id === productId);
//   // 11. Отримаємо дані з localStorage під час кліка, якщо їх
//   // нема, то отримаємо порожній масив.
//   const products = JSON.parse(localStorage.getItem(LS_KEY)) || [];
//   // 12. Перевіряємо за індексом чи є вже в масиві products елемент, 
//   // який ми хочемо додати
//   const index = products.findIndex(({ id }) => id === productId);
//   // 13. Реалізуємо в корзині показ кількості однакових продуктів
//   // 14. Якщо елемента у корзині(products) немає
//   if(index === -1) {
//     // 15. то створюємо властивість qty
//     currentProduct.qty = 1;
//     // 16. Додаємо qty в корзину, яку отримали з localStorage,
//     // а саме масив products.
//     products.push(currentProduct);
//     // 17. якщо елемент у корзині(products) є
//   } else {
//     // 18. то знаходимо обєкт у масиві за допомогою
//     // індексу і збільшуємо qty на 1
//     products[index].qty += 1;
//   }
//   // 19. Покладемо масив з продуктами у localStorage
//   localStorage.setItem(LS_KEY, JSON.stringify(products));
// }


// // -------------

// // // пояснення отримання доступу до обєкта в масиві 
// // // за допомогою індексу

// // const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
// // const index = arr.findIndex(({ id }) => id === 2);

// // console.log(arr[index]);

