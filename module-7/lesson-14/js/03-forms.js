/**
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 * 
 * Оброби форму та збери відгук користувача в 
 * обєкт
 */ 

/* Для того, щоб взаємодіяти з формою потрібно
повісити безпосередньо на неї слухач події.
Для цього використовується подія submit. 
event - це обєкт події.
У формі у розмітці в інпутах задаємо в атрибуті
name значення, для того, щоб потім мати можливість
його отримати. Саме за цим значенням ми з форми 
будемо витягати наші дані.
event.target.elements
Наші ключі значення, яке зберігається в цих
ключах, по-перше назва ключа береться з 
атрибута name розмітці HTML і значенням
цього ключа буде
*/ 

// const form = document.querySelector(".js-form");
// form.addEventListener("submit", handleSubmit)

// function handleSubmit(event) {
//   event.preventDefault(); 

//   const elements = event.target.elements;

// // на цьому етапі можемо провести перевірку

//   // cтворимо обєкт, куди покладемо дані з форми 
//   const info = {
//     email: elements.email.value,
//     password: elements.password.value,
//     comment: elements.comment.value
//   }

//   console.log(info);
//   // отримаємо обєкт даних, де буде імейл
//   // пароль, комент, які ми ввели при 
//   // заповненні форми

//   event.target.reset();
//   // для очищення форми

//   // alert(JSON.stringify(info));

//   // console.log(elements.email);
//   // // отримаємо посилання на тег інпут, на текстове поле,
//   // // у якого name="email"

//   // console.log(elements.email.value);
//   // // отримаємо доступ до даних
// }

/* currentTarget - буде те, на кого додали слухач,
а тarget - буде те, на чому відбувається зараз подія */ 