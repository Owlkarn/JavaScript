// В html создать кнопку button
// После загрузки страницы вывести в консоль текст “страница загрузилась”
// Добавить событие onclick которое выводит в консоль текст “событие onclick”
// Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// window.onload = () => {
//     console.log('страница загрузилась');
// }
//
// const btnEl = document.querySelector('button');
// btnEl.onclick = () => {
//     console.log('событие onclick');
// }
//
// btnEl.addEventListener('click', () => console.log('событие addEventListener'));

// Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// const btnEls = document.querySelectorAll('button');
// //или можно найти все кнопки, и каждой добавить прослушку.
// btnEls.forEach(e => e.addEventListener('click', element => console.log(element.target)));
//
// let count = 0;
// const btnEl4 = document.querySelector('.btn4');
// btnEl4.addEventListener('click', () => {
//     count++;
//     console.log(count);
// });
//
// const btnEl5 = document.querySelector('.btn5');
// btnEl5.onclick = () => btnEl5.innerHTML = 'Вы нажали на эту кнопку';

// Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// Создать вторую кнопку, которая будет удалять созданный заголовок h1
// Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” ,
// как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const btnEl1 = document.querySelector('.btn1');
//
// btnEl1.addEventListener('click', () => {
//     const h1El = document.createElement('h1');
//     h1El.innerHTML = 'Новый заголовок';
//     btnEl1.insertAdjacentElement('afterend', h1El);
// })
//
// const btnEl2 = document.querySelector('.btn2');
//
// btnEl2.onclick = () => {
//     const h1Els = document.querySelectorAll('h1');
//     h1Els.forEach(e => e.remove());
// };
//
// const btnEl3 = document.querySelector('.btn3');
//
// btnEl3.addEventListener('mouseover', () => console.log('вы навели на данную кнопку'));
// btnEl3.addEventListener('mouseout', () => console.log('Наведения на кнопку больше нет'));

// Создать в html список состоящий из 3-х произвольных элементов li
// Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// Создать кнопку, которая будет удалять первый элемент из созданного списка
// Создать кнопку, при клике на которую ей добавляется класс “click”

// const btnEl1 = document.querySelector('.btn1');
// const ulEl = document.querySelector('ul');
// btnEl1.onclick = () => {
//     const liEl = document.createElement('li');
//     liEl.innerHTML = 'новый элемент списка';
//     ulEl.appendChild(liEl);
// }
//
// const btnEl2 = document.querySelector('.btn2');
// btnEl2.onclick = () => {
//     const firstLi = ulEl.querySelector('li');
//     firstLi.remove();
// }
//
// const btnEl3 = document.querySelector('.btn3');
// btnEl3.onclick = () => {
//     btnEl3.classList.add('click');
// }

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const divContEl = document.querySelector('.content');
const btnEl = document.createElement('button');
btnEl.innerHTML = 'Отправить';
divContEl.appendChild(btnEl);
btnEl.onclick = () => {
    btnEl.innerHTML = 'Текст отправлен';
}


