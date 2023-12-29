// Необходимо получить список всех пользователей с помощью бесплатного API
// (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
// Пользователь должен иметь возможность удалить любого пользователя из списка.

// const url = 'https://jsonplaceholder.typicode.com/users';
//
// async function getData(url) {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// }
//
// try {
//     const data = await getData(url);
//     const bodyEl = document.querySelector('body');
//     data.forEach(el => {
//         bodyEl.insertAdjacentHTML('beforeend',
//             `<div> <p>${el.name}</p>
// <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
// <ul>
//   <li>username: ${el.username}</li>
//   <li>email: ${el.email}</li>
// </ul>
// </div>`)
//     })
//     const delEl = document.querySelectorAll('svg');
//     delEl.forEach(el => {
//         el.onclick = () => {
//             el.parentElement.remove();
//         }
//     })
// }catch (error) {
//     console.log('no connect')
// }

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const urlDog = 'https://dog.ceo/api/breeds/image/random';
let count = 0;

async function getDogData(url) {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const insertHTML = (element, src) => {
    element.insertAdjacentHTML('beforeend',
        `<img src=${src} alt="">`)
}

try {
    const bodyEl = document.querySelector('body');
    async function getNextImage() {
        const data = await getDogData(urlDog);
        insertHTML(bodyEl, data.message);
        count++;

        if (count < 10) {
            setTimeout(getNextImage, 3000);
        }
    }
    await getNextImage();
}catch (error) {
    console.log('no connect')
}
