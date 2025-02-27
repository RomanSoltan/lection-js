"use sctrict";

/**
 * Масив об'єктів
 * 
 * - Перебір масива
 * - Пошук обєкта за значенням
 * властивості
 * - Колекція значень властивості
 */

// Масив обєктів - це дуже типова задача.

/**
 * Пошук друга за іменем
 */

// Створимо функцію findByName(), яка буде 
// приймати два параметри allFriends і name.
// Функцію будемо викликати у консолі, як 
// аргументи передамо масив friends, і імя
// одного друга. В allFriends приходить масив,
// який потрібно перебрати за допомогою циклу
// for...of. В змінній friend буде знаходитись
// поточний елемент масиву, який є обєктом.
// У кожного обєкта є властивість name, яку
// я можу отримати і порівняти з тою, яка 
// прийшла в мою функцію як параметр. Для цього
// використаємо конструкцію if. І якщо у мого
// друга властивість name така сама як та, яка
// була отримана як параметр, то тоді одразу 
// поверни мені поточний обєкт мого друга 
// friend у місце виклику функції і припини 
// виконання функції.
// Якшо жодне з імен не підходить і ми жодного 
// разу не потрапимо в конструкцію if, то 
// код виконання піде далі і натрапить на 
// return і поверне рядок "Not found". 

// const friends = [
//   {name: "Ross", online: false},
//   {name: "Joey", online: true},
//   {name: "Chandler", online: false},
//   {name: "Phoebe", online: true},
//   {name: "Monica", online: true},
//   {name: "Rachel", online: false},
// ];

// // console.log(friends);
// // console.table(friends);

// function findByName(allFriends, name) {
//   for(const friend of allFriends) {
//     if(friend.name.toLowerCase() === name.toLowerCase()) {
//       return friend;
//     }
//   }

//   return "Not found";
// }

// console.log(findByName(friends, "Joey"));
// console.log(findByName(friends, "phoebe"));
// console.log(findByName(friends, "Roman"));



/**
 * Отримаємо імена всіх друзів
 */

// Створимо функцію getAllNames(), яка буде
// приймати параметром arr масив friends,
// який буде переданий як аргумент при виклику
// функції. Що потрібно зробити? Потрібно 
// пройтись по масиву за допомогою циклу for...of,
// витягти імя кожного друга і скласти імена
// в новий масив, який повернути після виконання
// циклу. Створимо масив allNames, в який на кожній
// ітерації будуть додаватися імена друзів.
// За допомогою циклу for...of ми перебираємо
// масив arr, де в змінній item буде знаходитись 
// поточний елемент масиву, а саме обєкт, в якому
// знаходяться дві властивості. Тепер потрібно 
// додати ці імена до порожнього масиву allNames, 
// за допомогою методу масивів push(), де аргументом
// передати імя кожного друга item.name
// Після того, як цикл завершить свою роботу
// код іде далі і натрапляє на оператор return, 
// який припинить виконання функції і поверне
// у місце виклику масив allNames.

// const friends = [
//   {name: "Ross", online: false},
//   {name: "Joey", online: true},
//   {name: "Chandler", online: false},
//   {name: "Phoebe", online: true},
//   {name: "Monica", online: true},
//   {name: "Rachel", online: false},
// ];

// function getAllNames(arr) {
//   const allNames = [];
//   for(const item of arr){
//     allNames.push(item.name);
//   }
  
//   return allNames;
// }
// console.table(getAllNames(friends));
// console.log(getAllNames(friends));


/**
 * Отримуємо імена тільки тих друзів, 
 * які зараз онлайн
 */

// Створюємо функцію getOnline(), яка
// буде приймати як параметр allFriends
// масив друзів friends, який буде 
// передано як аргумент при виклику 
// функції. Що потрібно зробити?
// Створити новий масив, куди будемо
// додавати друзів, які знаходяться online.
// Далі потрібно перебрати масив друзів
// allFriends за допомогою циклу for...of,
// де в змінній friend на кожній ітерації
// буде знаходитись елемент масиву, а саме
// обєкт, в якому розміщені дві властивості.
// У кожного друга є ключ властивості online,
// яка зберігає в собі значення false
// або true. І власне за цією властивістю і 
// буде створюватися умова блоку if, яка буде
// перевіряти чи друг online чи ні.
// В конструкції if потрібно задати умову, 
// для того щоб потрапити в тіло if. 
// Якщо друг знаходиться online, тобто 
// friend.online, то тоді ми потрапляємо в 
// тіло блоку if, де будемо додавати обєкт
// друга до порожнього масива onlineNames, 
// за допомогою метода масивів push(), де 
// аргументом передаємо змінну friend, в 
// якій зберігається обєкт друга, який ми
// хочемо додати. І коли цикл відрацює 
// повертаємо масив в місце виклику функції,
// за допомогою оператора return.


// const friends = [
//   {name: "Ross", online: false},
//   {name: "Joey", online: true},
//   {name: "Chandler", online: false},
//   {name: "Phoebe", online: true},
//   {name: "Monica", online: true},
//   {name: "Rachel", online: false},
// ];

// function getOnline(allFriends) {
//   const onlineNames = [];

//   for(const friend of allFriends) {
//     if(friend.online) {
//       onlineNames.push(friend);
//     }
//   }
  
//   return onlineNames;
// }
// console.table(getOnline(friends));
// console.log(getOnline(friends));



/**
 * Напишіть функцію 
 * calcTotalPrice(stones, stoneName), яка 
 * приймає масив обєктів та рядок з назвою
 * каменю. Функція рахує і повертає загальну
 * вартість каміння з таким імям, ціною та 
 * кількістю з обєкта
 */

// Створимо функцію calcTotalPrice(arr, stoneName)
// яка приймає, як параметр arr масив обєктів та 
// рядок з назвою каменю, який зберігється у змінній
// stoneName. Параметри передаються у мою функцію 
// під час її виклику, як аргументи. Функція 
// має рахувати загальну вартість каменю.
// Створимо за допомогою ключового слова let змінну,
// де буде зберігатися загальна вартість. Далі
// за допомогою циклу for...of ми перебираємо 
// масив arr поелементно. В змінній item
// на кожнй ітерації буде знаходитись елемент 
// масиву, а саме один обєкт, в якому є три 
// властивості. Що далі? Створюємо у тілі 
// циклу конструкцію if, в якій задаємо умову, 
// що якщо при переборі масиву обєкт з ключем
// властивості name буде таким самим, тобто 
// дорівнювати, як імя каменю, яке ми отримаємо 
// у функції як другий параметр, тоді ми 
// потрапляємо в тіло конструкції if, де 
// виконається наступний код. Далі до змінної
// totalPrice потрібно додати ціну каменю 
// помножену на кількість каменів. Після 
// виконання циклу потрібно з допомогою 
// оператора return повернути результат у 
// місце виклику функції.

// const stones = [
//   {name: "Смарагд", price: 1300, quantity: 4 },
//   {name: "Діамант", price: 2700, quantity: 3 },
//   {name: "Сапфір", price: 400, quantity: 7 },
//   {name: "Щебінь", price: 200, quantity: 2 },
//   {name: "Щебінь", price: 200, quantity: 3 },
// ]

// function calcTotalPrice(arr, stoneName) {
//   let totalPrice = 0;

//   for(const item of arr) {
//     if(item.name === stoneName) {
//       totalPrice += item.price * item.quantity;
//     }
//   }

//   return totalPrice;
// }

// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(calcTotalPrice(stones, "Сапфір"));
// console.log(calcTotalPrice(stones, "Щебінь"));


// ====================================== 2

/**
 * Обєкти
 * 
 * - Методи обєкта
 * - Доступ до властивостей обєкта через this
 * - Зміна за посиланням
 */

// Метод обєкта - це просто функція, яка
// зберігається під певною властивістю.

// Створимо просто якийсь обєкт, в якому 
// буде властивість з ключем name і 
// значенням "My playlist" і тд.
// Як у обєкті створити метод? Що таке 
// метод? Це функція. 
// У обєкті можна зберігати не лише 
// значення, але і функції також.
// Яким чином? Синтаксис дуже схожий до
// того, коли ми оголошуємо функцію, в 
// тілі обєкту робимо те саме, коли
// записуємо функцію, лише за винятком
// опускаємо слово function. 

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   // метод обєкта 
//   changeName() {
//   }
// }
// console.log(playlist);

// Навіщо потрібен метод? Для того, щоб 
// взаємодіяти з обєктом. Що можна з 
// методом робити? Як з ним працювати
// і як викликати? Для того щоб викликати
// метод обєкту, по факту потрібно зробити
// те саме, що й коли звертаємося до 
// властивості обєкта через крапку, з 
// однією особливістю, оскільки метод це 
// функція, то потрібно поставити круглі
// дужки, щоб цей метод викликати.

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   // метод обєкта 
//   changeName() {
//   }
// }

// playlist.changeName(); // виклик методу

// console.log(playlist);

// Функція викликана, але в ній нічого немає.
// В функцію під час виклику можна передавати
// аргументи. Під час створення функції цей
// аргумент буде отриманий як параметр. Тепер
// можна скористатися функцією, щоб 
// перейменувати властивість name в обєкті
// playlist. Через крапку отримаємо доступ 
// до властивості name і присвоїмо туди 
// значення, яке отримали у функції як параметр.
// Тобто метод обєкту - це просто звичайна 
// функція, яка зберігається у властивості
// обєкту. Так як обєкт являється змінною, 
// яка оголошена за допомогою ключового слова
// const, то якщо ми спробуємо звернутися до  
// змінної до моменту її створення, це викличе 
// помилку в консолі

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   // метод обєкта 
//   changeName(newName) {
//     playlist.name = newName;
//   }
// }

// playlist.changeName("Alice playlist"); // виклик методу

// console.log(playlist); // перейменували name
// // {name: 'Alice playlist', rating: 5, tracks: Array(3), changeName: ƒ}


// Як з обєкту дістати властивість, 
// ключ якої зберігається в змінній
// propName?
// Відповідь: за допомогою синтаксису
// квадратних дужок.

// const propName = "name";

// const obj = {
//   name: "Смарагд", price: 1300, quantity: 4
// };

// console.log(obj[propName]); // Смарагд


// Цей метод на даному етапі змінює назву 
// плейліста. Тепер створимо ще один плейліст.
// Хотілося б також мати можливість змінювати
// назву у новому плейлісті так само, як і 
// в попередньому. Копіпаст функції - це не ок.
// Потрібно перевикористати функцію, просто 
// викликати функцію у новому плейлісті,
// вона для того і була створена. Для цього
// потрібно створити нову властивість changeName у 
// новий плейліст за допомогою крапки 
// (romanPlaylist.changeName). Що потрібно 
// зберегти у цю властивість? 
// Цій властивості потрібно присвоїти 
// посилання на функцію changeName(). Як це 
// можна зробити? Для цього звертаємося до обєкту,
// в якій ця функція була створена і через 
// крапку отримаємо доступ до функції, але не 
// викликаємо її (playlist.changeName). Цією 
// дією, ми передаємо у новий обєкт, а саме 
// у властивість changeName, посилання на 
// функцію changeName(), яка знаходиться у
// обєкті playlist. Тепер потрібно змінити 
// імя у romanPlaylist. Але імя в такий спосіб
// не зміниться. Чому? А не змінилося імя, тому
// що воно було змінено у обєкті playlist. 
// Чому так відбулося? Відбулося так, тому що 
// коли викликається у romanPlaylist метод 
// changeName() і передається туди аргумент,
// то запускається функція changeName(), яка 
// розташована у обєкті playlist. У тілі цієї
// функції написане наступне: візьми playlist,
// візьми його властивість name і заміни на 
// нову назву. Тобто коли ми викликаємо функцію
// у обєкті romanPlaylist, то ми змінюємо 
// назву властивості name у обєкті playlist.
// Це не зовсім те, що потрібно отримати, коли
// у romanPlaylist викликаємо метод changeName().
// Для того, щоб це виправити потрібно в методі
// обєкту звертатися не до конкретного обєкту за 
// його іменем, а потрібно звертатися до обєкту,
// який викликає метод changeName(). Це можна
// зробити за допомогою ключового слова this. 

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//     // метод обєкта 
//   changeName(newName) {
//     this.name = newName; // 
//   }
// }

// const romanPlaylist = {
//   name: "Roman playlist",
//   rating: 4,
//   tracks: ["track-4", "track-5", "track-6"],
// }

// romanPlaylist.changeName = playlist.changeName;
// romanPlaylist.changeName("Roman Soltan playlist"); 


// console.log("Roman Soltan playlist", romanPlaylist);
// console.log("playlist", playlist);

// ===================== Ключове слово this

// this це контекст, який отримує метод
// обєкту. Як він його отримує і коли?
// Давайте розберемося. Я знову у petyaPlaylist
// викличу метод changeName(), коли він
// запуститься, у нас запуститься функція
// changeName(newName) у обєкті playlist і 
// ми побачимо у консолі що ж таке this в 
// нашому методі changeName(). В даному 
// випадку this це мій обєкт petyaPlaylist.
// Окей. А якщо я в playlist викличу цей 
// метод changeName()? Тобто, звертаємося до 
// обєкта playlist і викликаємо в нього 
// метод changeName(). Чим this буде цього 
// разу? Цього разу отримали в консолі обєкт 
// playlist. З цього можна зробити наступний
// висновок, що this в метод обєкту потрапляє,
// тобто ініціалізується, під час виклику 
// методу цього обєкту, не створення методу обєкту, 
// а виклику методу обєкту. В момент виклику 
// методу changeName() ініціалізується
// контекст (this) в моєму методі обєкту.
// А чим буде this в моєму методі? Він 
// ініціалізується обєктом, який викликає
// цей метод. Тобто в моїй функції-методі 
// changeName() this буде обєкт, який стоїть
// зліва від цієї функції-методу. Тобто this,
// у момент виклику, буде тим обєктом, 
// який викликає цей метод (стоїть зліва від
// методу). Тобто у this підставляється той
// обєкт, який викликав метод changeName().
// Той хто зліва, на того і посилається 
// this у методі обєкту.
// Оскільки тепер функція може посилатися 
// на конкретний обєкт, який її викликає
// це означає, що цей обєкт можна якось
// змінювати, тобто тепер можна за допомогою
// ключового слова this змінювати властивості
// саме того обєкта, який викликає метод
// changeName(). Оскльки у this є послання
// на обєкт, який викликав цей метод, то 
// можна отримати доступ до властивостей цього
// обєкта. Перезаписати властивість обєкта
// можна за допомогою крапки, тільки 
// замість назви обєкта потрібно
// написати ключове слово this, в яке буде
// підставлятся обєкт, який викликав цей метод
// (this.name = newName)

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   changeName(newName) {
//     // метод обєкта 
//     this.name = newName;
//     // буде змінюватися імя у 
//     // кожного обєкту, який викличе
//     // цей метод
//   }
// }

// const petyaPlaylist = {
//   name: "Petya playlist",
//   rating: 4,
//   tracks: ["track-4", "track-5", "track-6"],
// }

// petyaPlaylist.changeName = playlist.changeName;

// petyaPlaylist.changeName("Sport petya"); 

// playlist.changeName("Alice playlist")

// console.log(petyaPlaylist);
// console.log(playlist);

// Як це працює?
// Тепер, коли petyaPlaylist викликає
// функцію changeName(), яка приймає 
// в себе якийсь рядок, як агумент.
// Далі ми йдемо до цієї функції,
// тобто місця, де ця функція була 
// створена, де вона приймає цей
// рядок, як параметр. Після цього
// ми заходимо в тіло цієї функції
// і кажемо (з допомогою ключового 
// слова this) нехай обєкт, який 
// викликав цю функцію, візьме 
// властивість name і переініціалізує 
// в неї значення, яке ми отримали 
// в функцію, як параметр. І імя 
// властивості обєкта petyaPlaylist 
// змінилося на рядочок Sport petya.

// Тобто, наше ключове слово this
// дає нам можливість звертатися 
// під час ВИКЛИКУ нашого метода
// саме до того обєкта, який викликав
// цей метод. Різні обєкти можуть 
// викликати цей метод і для того,
// щоб ми виконували правильно операції
// саме над тим обєктом, який викликає
// цей метод, ми використовуємо в ньому
// наше ключове слово this. І ще, щоб 
// уникнути дублювання коду. Тобто
// ми створили одну функцію для всіх
// обєктів, які будуть її використовувати
// і this у цій функції буде динамічним, 
// замість якого буде піставлятися імя 
// обєкта, який викликає цю функцію-метод.

// this в методі обєктів посилається
// на обєкт, який викликає цей метод,
// тобто обєкт, який стоїть зліва від 
// методу.

// const playlist = {
//   name: "My playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   changeName(newName) {
//     this.name = newName;
//   },
//   addTrack(newTrack) {
//     this.tracks.push(newTrack);
//   },
//   updateRating(newRating) {
//     this.rating = newRating;
//   },
//   getTracksCount() {
//     return this.tracks.length;
//   }
// }

// playlist.changeName("Alice playlist");
// playlist.addTrack("track-4");
// playlist.updateRating(4);
// console.log(playlist.getTracksCount());

// console.log(playlist);


// ================================ 3

/**
 * Синтаксис spread i rest
 * 
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкту
 */

// Створимо функцію function foo(),
// яку будемо викликати у консолі, 
// де передаватимемо якісь аргументи.
// Ці аргументи можна отримати у функції
// як параметри. Оскільки цих параметрів
// може бути довільна кількість, то отримати
// довільну кількість параметрів в тілі 
// функції можна за допомогою псевдомасиву
// arguments. Ми отримаємо псевдомасив, 
// потім перетворюємо його в масив і далі
// вже можемо з ним працювати. Але для цього
// існує ще один інструмент, який називається
// rest i spread операторами.

// function foo() {
//   console.log(arguments);
// }

// foo(1, 2, 3, 4, 5);

// rest - це спеціальний синтаксис, який дає
// нам можливість зібрати групу незалежних
// елементів в масив. Як це можна зробити?
// Під час створення функції в круглих дужках
// там де параметри потрібно прописати 
// ...num, де num може бути будь-яка довільна
// назва. Що це таке? Це у нас rest оператор,
// який візьме всю купу параметрів, які сюди 
// отримаємо і складе їх в один масив. Тобто
// по факту arguments вже не те щоб і дуже
// потрібен. Цю дію можна робити за допомогою 
// rest опертора. Тобто, якщо в круглих дужках
// стоїть три крапки ПІД ЧАС СТВОРЕННЯ ФУНКЦІЇ,
// це буде rest оператор.

// function foo(...num) {
//   console.log(num);
// }

// foo(1, 2, 3, 4, 5);

// function foo(...rest) {
//   console.log(rest);
// }

// foo({ x: 1, y: 2}); 
// // поверне масив, а всередині один обєкт

// ======================= spread оператор

// spread оператор виглядає точно так само, як
// і rest оператор, тобто використовує 
// синтаксис трьох крапок, але робить він 
// абсолютно зворотню дію. Він розгортає масив
// поелементно передаючи його, тобто витягне 
// з нього кожен окремий елемент.
// Праворуч від оператора присвоєння синтаксис
// трьох крапок буде spread оператором.

// Якщо під час виклику функції використати
// синтаксис трьох крапок, то у цьому випадку
// це буде spread оператор.

// Висновки
// rest - під час створення фукції,
// spread - під час виклику функції або
// праворуч від оператора присвоєння.

// const arr = [1, 2, 3];

// const numbers = [
//   1000,
//   ...arr,
//   4000,
//   ...[5, 6, 7],
//   8000
// ];

// console.log(numbers);

// Якщо під час виклику функції використати
// синтаксис трьох крапок, то у цьому випадку
// це буде spread оператор.

// function foo(a) {
//   console.log(a);
// }

// foo(...[1, 2, 3]); 
// // поверне 1, оскільки spread
// // оператор розгорне масив.

/**
 * Пошук найменшої або найбільшої температури
 * (числа)
 */

// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.max(...temps));
// console.log(Math.min(...temps));


/**
 * Створення масиву і тип за посиланням 
 */

// const a = [1, 2, 3];
// const b = [...a]; 
// spread, оскільки три крапки праворуч
// від оператора присвоєння.

// console.log(a === b); 
// false, тому що у змінну b створили
// новий масив і розгорнули у нього
// значення, за допомогою оператора spread, 
// з масиву, який присвоєний змінній а.
// І оскільки це два різних масиви, а 
// масиви порівнюються за посиланням, то 
// результатом порівняння буде false.

// a[0] = 100;
// І якщо в елемент під нульовим індексом
// переприсвоїти значення 100, то в результаті
// в змінній а зміниться елемент на 100, 
// а у змінній b - залишиться без змін.

// console.log("a", a); // [100, 2, 3]
// console.log("b", b); // [1, 2, 3]

// Примітиви копіюються за значеням,
// а складні типи даних копіюються за
// посиланням. Це означає, що коли створюються
// складні типи даних, то по факту створюється 
// посилання на місце в памяті, де зберігається
// цей тип данних. І в цьому місці памяті 
// зберігається значення, на яке потрібно
//  посилатися при порівнянні.

// Коли на 707 рядку було створено новий масив b
// і в нього було розгорнуто значення масиву зі 
// змінної а, то розгорталося туди не значення 
// масиву з змінної (а), а посилання на місце в 
// памяті, де зберігаються ці значення, оскільки
// ці значення є складним типом даних, в нашому 
// випадку обєктами. Тобто, по факту є два різних
// масива, контент в них посилається на одне і теж
// місце у памяті, тому зміни відбуваються в обох 
// масивах. В цьому різниця між примітивними 
// типами даних і складними типами даних.

// const a = [{ x: 1}, { y: 2}, {q: 3}];
// const b = [...a]; 

// console.log(b === a); // false

// a[0].x = 100; 

// console.log("a", a);
// console.log("b", b);


/**
 * Поєднуємо кілька масивів в один
 * через spread
 */

// Як це можна зробити?
// Це можна зробити за допомогою метода
// масивів concat(). А тепер це можна 
// зробити за допомогою опертора spread,
// тобто використати синтаксис трьох
// крапок. Послідовність розгортання
// має значення

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const arr = [
//   ...lastWeekTemps, 
//   ...currentTemps, 
//   ...nextWeekTemps
// ];

// console.log(arr);



/**
 * Створення об'єкта
 */

// Розгортати можна не лише масиви, 
// а й обєкти, за допомогою spread
// оператора. І він сам розуміє, що
// перед ним масив чи обєкт. Якщо 
// обєкт, то оператор буде розгортати
// властивості обєкта у форматі 
// ключ:значення. Імена властивостей 
// об'єкта — унікальні, тому 
// властивості об'єкта, що 
// розгортаються, можуть перезаписати 
// значення вже існуючої властивості, 
// якщо їх імена збігаються.

// const objA = { x: 1, y: 2};
// const objB = { x: 0, q: 3};

// const objC = {
//   ...objA, // x: 1, y: 2
//   x: 10, // x: 10, y: 2
//   ...objB, // x: 0, y: 2, q: 3
//   y: 20 // x: 0, y: 20, q: 3
// };

// console.log(objC); // x: 0, y: 20, q: 3

/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettings = {
//   theme: "light",
//   showNotifications: true,
//   hideSidebar: false,
// }

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// }

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings
// }

// console.log(finalSettings);


// Задача про транзакції

// Пояснення

//  Першим у нас є метод, який буде
// створювати тразакції. Цей метод буде
// приймати в себе якусь суму і тип цієї
// транзакції. Він буде створювати якийсь
// обєкт, в якому буде id(буде відповідати
// сумі), суму, на яку відбулася транзакція,
// і тип цієї транзакції. З цього методу 
// потрібно повернути цей обєкт. Один метод 
// створили. Він просто приймає дані, створює
// обєкт і повертає цей обєкт.
// Далі потрібно зробити метод, який 
// відповідає за додавання суми до балансу.
// Він приймає суму amount, далі було б 
// непогано покласти цю суму на баланс.
// Як можна покласти цю суму на баланс?
// За допомогою ключового слова this.
// Звертаємося до властивості balance 
// з допомогою ключового слова this. 
// Кажу додай до мого balance amount.
// Далі потрібно викликати метод для 
// створення транзакції.



/**
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші 
 * з рахунку.
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
}

/**
 * Кожна транзакція це обєкт із
 * властивостями: id, amount, type
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /**
   * Метод створює та повертає обєкт
   * транзакції. Приймає суму та
   * тип транзакції.
   */
  createTransaction(amount, type) {
    const obj = {id: amount, amount, type};
    return obj;
  },

  /**
 * Метод, що відповідає за додавання 
 * суми до балансу. 
 * Приймає createTransaction для створення
 * обєкту транзакції після чого додає його 
 * до історії транзакцій
 */
  deposit(amount) {
    this.balance += amount;
    const trasaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(trasaction);
  },

  /**
 * Метод, що відповідає за зняття суми з 
 * балансу. Приймає суму транзакції.
 * Викликає createTransaction для створення
 * обєкта транзакції після чого додає його
 * до історії транзакцій.
 * 
 * якщо amount більше ніж поточний баланс,
 * виводь про те, що зняття такої суми не
 * можливе, недостатньо коштів
 */
  withdraw(amount) {
    if(this.balance < amount) {
      console.log("Недостатньо коштів");
      return;
    }

    this.balance -= amount;
    const trasaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(trasaction);
  },

  /**
 * Метод повертає поточний баланс
 */
  getBalance() {
    return this.balance;
  },

  /**
 * Метод шукає та повертає обєкт транзакції
 * по id
 */
  getTransactionDetails(id) {
    for(const item of this.transactions) {
      if(item.id === id) {
        return item;
      }
    }

    return "Not found";
  },

  /**
 * Метод повертає кiлькість коштів
 * певного типу транзакції з усієї
 * історії транзакцій
 */
  getTransactionTotal(type) {
    let total = 0;

    for(const item of this.transactions) {
      if(item.type === type) {
        total += item.amount;
      }
    }

    return total;
  },
};

account.deposit(500);
account.deposit(100);

account.withdraw(200);

console.log(account.getBalance());
console.log(account.getTransactionDetails(2000));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));


console.log(account);
