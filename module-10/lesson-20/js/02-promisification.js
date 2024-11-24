/* ======================================================================================================================
Промісифікація
====================================================================================================================== */
/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

/*Промісифікація - це коли результат роботи функції 
перетворюємо на проміс*/

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if(random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`);
//     } else {
//       onError("Закінчилися продукти");
//     }
//   }, 1000)
// }

// makeOrder(
//   "Hotdog",
//   (str) => {
//     console.log("success", str)  
//   },
//   (str) => {
//     console.log("error", str);
//   }
// )

/*промісифікуємо нашу функцію*/

// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//       if(random > 0.5) {
//         resolve(`Ваше замовлення ${dish}`);
//       } else {
//         reject("Закінчилися продукти")
//       }
//     }, 1000);
//   })
// }

// makeOrder("Hot-dog")
//   .then(value => console.log(value))
//   .catch(error => console.log(error));


/* ======================================================================================================================
Промісифікація «синхронних» функцій
====================================================================================================================== */
/*
  * Промісифікація «синхронних» функцій
  * - Promise.resolve()
  * - Promise.reject()
  */

/*У синхронному коді промісифікувати функцію
можна іншим способом*/ 

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   if(random > 0.5) {
//     onSuccess(`Ваше замовлення ${dish}`);
//     return;
//   }
  
//   onError("Закінчилися продукти");
// }

// makeOrder(
//   "Hotdog",
//   (str) => {
//     console.log("success", str)  
//   },
//   (str) => {
//     console.log("error", str);
//   }
// )

/*Промісифікуємо функцію за допомогою статичних методів
  - Promise.resolve()
  - Promise.reject()

Якщо у нас синхронний код, то використовуємо статичні 
метод промісу Promise.resolve() і Promise.reject(), 
то ми цей проміс повинні повернути з функції, 
на відміну від просто resolve() і reject().
*/ 

// const makeOrder = (dish) => {
//   const random = Math.random();

//   if(random > 0.5) {
//     return Promise.resolve(`Ваше замовлення ${dish}`);
//   } else {
//     return Promise.reject("Закінчилися продукти");
//   }
// }

// makeOrder("Hot-cat")
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


/* ======================================================================================================================
Promise.all 
====================================================================================================================== */

/*
  1. Створюється час в мілісекундах startTime
  2. Заускаємо функції res1, res2, res3.
  3. Через три секунди setTimeout відпрацює
- він отримає поточний час currentTime
- від поточного часу currentTime відніме 
початковий час startTime
- проміс завершиться успішно і поверне результат обєкт,
title і time - різницю у часі*/ 

// const startTime = Date.now();

// const res1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "first", time: deltaTime })
//     }, 3000)
//   })
// }

// const res2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "second", time: deltaTime })
//     }, 1000)
//   })
// }

// const res3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "third", time: deltaTime })
//     }, 5000)
//   })
// }

// res1()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// res2()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// res3()
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

/*Тут можна використати статичний метод промісу,
щоб не обробляти проміси окремо і окремо виводити
результат промісу. 

  1. Метод називається Promise.all().
  2. Promise.all() чекає доки всі проміси завершаться 
успіхом і лише тоді поверне масив результатів.
  3. Цей метод приймає в себе масив промісів.
  4. Promise.all() повертає проміс.
  5. В результаті отримаємо масив оброблених промісів.
  6. Якщо один з промісів завершиться помилкою, тоді
відпрацьовує блок catch.
*/ 

// const startTime = Date.now();

// const res1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "first", time: deltaTime })
//     }, 3000)
//   })
// }

// const res2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "second", time: deltaTime })
//     }, 1000)
//   })
// }

// const res3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "third", time: deltaTime })
//     }, 5000)
//   })
// }

// Promise.all([res1(), res2(), res3()])
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

/* ======================================================================================================================
Promise.race
====================================================================================================================== */

/*
  1. Promise.race приймє в себе масив промісів
  2. Повертає проміс, який найшвидше завершився
  3. Не принципово як завершився успішно чи з помилкою*/ 

// const startTime = Date.now();

// const res1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "first", time: deltaTime })
//     }, 3000)
//   })
// }

// const res2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "second", time: deltaTime })
//     }, 1000)
//   })
// }

// const res3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       resolve({ title: "third", time: deltaTime })
//     }, 5000)
//   })
// }

// Promise.race([res1(), res2(), res3()])
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// =========================================

/*Проміс може зберігатися у змінній*/

// const lalala = new Promise((resolve, reject) => {
//   resolve(5);
// })
// console.log(lalala); // Promise {}

// ------------------

/*Якщо у функції, то проміс повертається як
результат виклику цієї функції*/ 

// const foo = () => {
//   return new Promise((resolve, reject) => {
//     resolve(10);
//   })
// }
// console.log(foo); // Зберігається посилання на функцію
// console.log(foo()); // Promise {}
