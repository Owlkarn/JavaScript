// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const content = document.querySelector('.content');

const images = JSON.parse(dataInfo);

images.forEach(image => {
    let img = document.createElement('img');
    const h1El = document.createElement('h1');
    const pEl = document.createElement('p');
    h1El.innerHTML = image.title;
    pEl.innerHTML = image.paragraph;
    img.id = image.id;
    img.src = image.url;
    img.width = image.width;
    img.height = image.height;
    content.appendChild(img);
    content.appendChild(h1El);
    content.appendChild(pEl);
});