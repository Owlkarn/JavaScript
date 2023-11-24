// Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль.
// Получите ссылку на первый абзац с классом www.и вывести его консоль
// <p className ="www">text1</p>
// <p className ="www">text2</p>

const divEl = document.getElementById('block');

console.log(divEl)

const parFirst = document.getElementsByClassName('www');
console.log(parFirst[0].innerHTML);


// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/
//     Дан тег <img class="photo" src="" alt="">
//     Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const linkEl = document.getElementsByClassName('link');
linkEl[0].innerHTML = 'link text js';
linkEl[0].href = 'https://developer.mozilla.org/ru/';

const  imgEl = document.getElementsByTagName('img');
imgEl[0].src = 'https://hobbygames.ru/image/cache/hobbygames_beta/data/HobbyWorld/Ujas_Arkhema/Osobnyaki_bezumiya/Mansions-of-Madness_box-1024x1024-wm.jpg'

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

const divParentEl = document.getElementsByClassName('content');
const newElPar = document.createElement('p')
divParentEl[0].appendChild(newElPar);
newElPar.innerText = 'Новый текстовый элемент';
newElPar.remove();

// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const newButtonEl = document.createElement('button');
let n = 0;
divParentEl[0].appendChild(newButtonEl);

newButtonEl.onclick = function () {
    n++;
    console.log(n)
}

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const secButtonEl = document.createElement('button');
secButtonEl.innerHTML = 'Отправить';
divParentEl[0].appendChild(secButtonEl);

secButtonEl.onclick = function () {
    secButtonEl.innerHTML = 'Текст отправлен';
}

const arr = ['Лист 1', 'List 2', 'List 3'];

const ulEl = document.createElement('ul');

divParentEl[0].appendChild(ulEl);

for (const element in arr) {
    const liEl = document.createElement('li');
    liEl.innerHTML = arr[element];
    ulEl.appendChild(liEl);
}