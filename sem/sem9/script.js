// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const inputEl = document.querySelector('input');
// const btnEl = document.querySelector('button');
//
// btnEl.addEventListener('click', (e) => {
//     if (inputEl.checked) {
//         console.log('Message send');
//     } else {
//         e.preventDefault();
//         const errorMessage = document.createElement('p');
//         errorMessage.innerHTML = 'Необходимо согласиться с условиями';
//         inputEl.insertAdjacentElement('afterend', errorMessage);
//     }
// })

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const bodyEl = document.querySelector('body');
const container = document.createElement('div.container');
bodyEl.appendChild(container);
// const teaLabel = document.createElement('label');
// teaLabel.htmlFor = 'tea';
// teaLabel.innerHTML = 'Tea';
// const teaInput = document.createElement('input');
// teaInput.type = 'radio';
// teaInput.id = 'tea';
// teaInput.name = 'drinks';
// container.appendChild(teaLabel);
// container.appendChild(teaInput);
//
// const coffeeLabel = document.createElement('label');
// coffeeLabel.htmlFor = 'coffee';
// coffeeLabel.innerHTML = 'Coffee';
// const coffeeInput = document.createElement('input');
// coffeeInput.type = 'radio';
// coffeeInput.id = 'coffee';
// coffeeInput.name = 'drinks';
// container.appendChild(coffeeLabel);
// container.appendChild(coffeeInput);
//
// const btnEl = document.createElement('button');
// btnEl.innerHTML = 'Send';
// container.appendChild(btnEl);
//
// btnEl.onclick = () => {
//     if (teaInput.checked) console.log('Чай закончился');
//     if (coffeeInput.checked) console.log('Кофе закончился');
// };

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const passInput = document.createElement('input');
// passInput.type = 'password';
// container.appendChild(passInput);
// const btnEl = document.createElement('button');
// btnEl.innerHTML = 'Send';
// container.appendChild(btnEl);
//
// btnEl.onclick = () => {
//     if (passInput.value === 'пароль') passInput.style.borderColor = 'green';
//     else {
//         passInput.style.borderColor = 'red';
//         alert('пароль неверный');
//     }
// };
//
// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const textInput = document.createElement('input');
textInput.type = 'text';
container.appendChild(textInput);

const h1El = document.createElement('h1');
h1El.innerHTML = 'Заголовок';
container.appendChild(h1El);

textInput.addEventListener('input', (e) => {
    h1El.innerHTML = textInput.value;
})



