/* ======================================================================================================================
Знайомство з класом Date
====================================================================================================================== */

/*
  - Створення
  - Unix-час
  - Методи
  - Різниця часу
  - Date.now()
*/ 

/* ======================================================================================================================
Створення
====================================================================================================================== */

/*Клас Date існує для отримування дат.

Ключове слово new дає можливість створити
екземпляр класу. Екземпляр класу - це обєкт.
У консолі наш обєкт одразу буде приведений до
рядка і ми побачимо поточну дату*/ 

// const currentDate = new Date();

// console.log(currentDate); // Sat Nov 23 2024 15:50:27 GMT+0200

/* ======================================================================================================================
Unix-час
====================================================================================================================== */

/*Якщо ми звернемось до обєкта і викличемо у нього
метод getTime(), то отримаємо число, яке наз Unix-час.
Unix-час - це кількість мілісекунд, яка минула з опівночі 
1 січня 1970 року до поточого часу виклику методу getTime().
Ним можна оперувати для обчислення різниці між часом*/ 

// const currentDate = new Date();

// console.log(currentDate.getTime());

/*Дозволяє отримати кількість мілісекунд, яка минула 
з опівночі 1 січня 1970 року до поточого часу 
виклику статичного методу now(), адже ми викликаємо цей 
безпосередньо у класу, а не в екземплярі класу.
Кількість мілісекунд завжди різна, злежить від того,
коли ви викликаєте метод*/ 

// console.log(Date.now()); // 1732370650467

/* ======================================================================================================================
Методи
====================================================================================================================== */

// const currentDate = new Date();

// /*показує, який сьогодні день тижня,
// починаючи рахунок з неділі і з нуля*/ 
// console.log(currentDate.getDay()); // 6

// /*показує, який сьогодні місяць,
// починаючи рахунок з нуля*/ 
// console.log(currentDate.getMonth()); // 10

// /*показує, яка сьогодні дата (число)*/ 
// console.log(currentDate.getDate()); // 23

// /*показує, який сьогодні рік*/ 
// console.log(currentDate.getFullYear()); // 2024

// // ==============================================

// /*Ми можемо не тільки отримувати наші дані, 
// а й змінювати. Для цього у нас є методи, 
// які починаються із set*/

// console.log(currentDate.setFullYear(2007)); // 1195827734822
// console.log(currentDate); // Fri Nov 23 2007 16:21:01 GMT+0200

/* ======================================================================================================================
Різниця часу
====================================================================================================================== */

// 1. Отримаємо поточну кількість мілісекунд
const date1 = Date.now();

// 2. setTimeout потрапляє у web api,
// чекає там дві секунди
setTimeout(() => {
  // 3. Отримаємо поточну кількість мілісекунд
  const date2 = Date.now();

  // 4. Подивимося різницю цих значень
  console.log(date2 - date1); 
  // У консолі бачимо час, який пройшов з моменту запуску скрипта
  
}, 2000);

