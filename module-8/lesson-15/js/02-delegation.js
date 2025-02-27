/** 
 * Додавання прослуховувача подій на 
 * кожен елемент
*/

// const container = document.querySelector(".container");
// [...container.children].forEach(box => {
//   box.addEventListener("click", handleClick);
// })

// function handleClick(event) {
//   const color = event.target.dataset.color
//   console.log(color);
// }

/* 
Отримай колір квадратика, по якому було 
здійснено клік. Як це можна зробити?

1. Отримаємо container.
2. Отримаємо доступ до вкладених елементів
container за допомогою властивості children.
3. Потрібно по всім квадратикам пробігтися і 
повісити на кожен слухач події клік.
4. Зробимо це з допомогою методу forEach.
5. Також створимо коллбек handleClick.
6. І виникне помилка, container.children поверне
псевдомасив, а forEach це метод масиву
7. Є два способи перетворити псевдомасив в масив
  - Array.from()
  - ...spread
8. Отримаємо колір кожного елемента з допомогою
обєкта події event, і в кожного div.box є 
data-атрибут за яким отримаємо колір
event.currentTarget.dataset.color.
9. У цьому випадку що currentTarget, що target
особливої різниці немає.
10. АЛЕ.... Ми тут стикаємось з тим, що 
по факту для кожного дочірнього елемента (children)
створюємо окремий слухач події. І таких children
може бути багато і як наслідок слухачів події. 
І це не дуже ок.

Що робити?

Для цього існує делегування.
*/

// ------------------------

/**
 * Делегування подій
 * 
 * Отримай колір квадратика, по якому
 * було здійснено клік
 */

const container = document.querySelector(".container");
container.addEventListener("click", handleClick);

function handleClick(event) {
  if(!event.target.classList.contains("box")) {
    return;
  }

  const color = event.target.dataset.color;
  console.log(color);
  
}

/*
Делегування можна реалізувати за рахунок 
того, що подія може спливати, тоді можна 
на батьківському елементі дізнатися, на 
якому саме елементі ми клікнули, за 
допомогою властивості target.
Тобто у властивості target зберігається 
посилання на елемент, на якому відбулася подія

Як це можна реалізувати?

1. Так само отримаємо container.
2. Тепер подію повісимо безпосередньо
на container. Тобто замість того, щоб 
на кожен квадрат вішати слухач події клік,
ми делегували це батьківському елементу 
container.
3. container тепер буде відслідковувати кліки
по container і безпосередньо по всім елементам,
які вкладені в нього.
4. В коллбек handleClick приймаємо обєкт події
event.
5. У event.currentTarget буде зберігатися
посилання на елемент, на якому
висить слухач події addEventListener.
6. У event.target безпосередньо буде зберігатися 
посилання на елемент по якому клікнули.
7. Якщо зараз спробуємо отримати колір, то ми
можемо стикнутися з такою ситуацією, що будемо 
намагатися отримати data-атрибут з container і 
нічого не отримаємо.
8. Тому у коллбек потрібно зробити перевірку і
виконувати функцію лише в тому випадку, коли
клік відбудеться на потрібному елементі.
9. Якщо клік відбудеться по елементу, який не 
цікавить, то одразу припиняти роботу функції.
10. Для цього потрібно в умові прописати, що якщо 
елемент, по якому клікнули не має класу box, то 
зайди у тіло конструкції if і виконанай наступне:
нічого не роби і припини виконання функції.
!event.target.classList.contains("box")
11. В результаті цього при кліку на квадратик 
ми отримаємо його. А при кліку між квадратками 
нічого не відбувається.
12. Ось таким чином ми можемо відловити подію не на
усіх елементах, а лише на тих, які нас цікавлять.
І не вішати слухач події на кожен елемент, а лише
на батьківський елемент і, з допомогою делегування і 
спливання, відловлювати подію клік на ньому.
*/

