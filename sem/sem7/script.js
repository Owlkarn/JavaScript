// <div class="block">
//
// </div>
// Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute)

// const blockEl = document.getElementsByClassName('block')[0];
// const  itemEl = document.createElement('div');
// itemEl.setAttribute('class', 'item');
// itemEl.innerHTML = 'Элемент внутри';
// blockEl.appendChild(itemEl);
// itemEl.classList.add('item_1');

// Дан код
// <div class="elem">
//     <img src="photo.png" alt="photo">
//     <div class="content">
//     <h2 class="heading">Lorem, ipsum dolor.</h2>
// <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
// </div>
// </div>
//
// Необходимо с помощью querySelector найти параграф с классом text
// Вывести в консоль соседний элемент h2
// Вывести в консоль родительский элемент content
// Вывести в консоль картинку
// Вывести в консоль родительский элемент elem

// const textEl = document.querySelector('.text');
// console.log(textEl.previousElementSibling);
// console.log(textEl.parentElement);
// console.log(textEl.parentElement.previousElementSibling);
//
// let elem = textEl;
// while (elem.parentElement.tagName !== 'BODY') {
//     elem = elem.parentElement;
// }
//
// console.log(elem);


// <div class="item">
//     <div class="elem">
//         <div class="info">
//             <h2 class="subtitle">Lorem, ipsum dolor.</h2>
//         </div>
//     </div>
// </div>
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

// let h2ParEl = document.querySelector('h2').parentElement;
//
// while (h2ParEl) {
//     console.log(h2ParEl);
//     h2ParEl = h2ParEl.parentElement;
// }

// <form action="#">
//     <input type="text">
//         <button class="btn">Отправить</button>
// </form>
// Дано поле ввода и кнопка отправить, необходим реализовать
// функционал, если пользователь нажимает на кнопку отправить,
// а поле ввода пустое, то под полем ввода и кнопкой должен
// появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

// const inputText = document.querySelector('input[type="text"]');
// const btnEl = document.querySelector('button.btn');
//
// btnEl.addEventListener('click', () => {
//     if (!inputText.value) {
//         const h2El = document.createElement('h2');
//         btnEl.parentElement.appendChild(h2El);
//         h2El.innerHTML = 'вы не заполнили поле ввода';
//         inputText.style.borderColor = 'red';
//     }
// });

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст
// поменялся на “Текст отправлен”

const btnEl = document.createElement('button');
btnEl.innerHTML = 'Отправить';
document.querySelector('.content').appendChild(btnEl);
btnEl.addEventListener('click', () => {
    btnEl.innerHTML = 'Текст отправлен';
});