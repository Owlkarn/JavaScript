// Цель: Разработать веб-приложение, которое будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.
//
//     Регистрация на Unsplash:
//
//     • Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// • Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).
//
// Создание приложения:
//
//     • Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
// • Нажмите "New Application".
// • Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
//     • Получите свой API-ключ после создания приложения.
//
//     Разработка веб-приложения:
//
// • Создайте HTML-страницу с элементами: изображение, имя фотографа,
// кнопка "лайк" и счетчик лайков.
// • Используя JavaScript и ваш API-ключ, получите случайное изображение
// из Unsplash каждый раз, когда пользователь загружает страницу.
// Обратите внимание, что должно подгружаться всегда случайное изображение,
// для этого есть отдельная ручка (эндпоинт) у API.
// • Отобразите информацию о фотографе под изображением.
// • Реализуйте функционал "лайка". Каждый раз, когда пользователь
// нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.
// Одну фотографию пользователь может лайкнуть только один раз.
// Также должна быть возможность снять лайк, если ему разонравилась картинка.
// • Добавьте функцию сохранения количества лайков в локальное хранилище,
// чтобы при новой загрузке страницы счетчик не сбрасывался,
// если будет показана та же самая картинка.
// • Реализуйте возможность просмотра предыдущих фото с сохранением их
// в истории просмотров в localstorage.
// • Реализовать все с помощью async/await, без цепочем then.

const randomImgEl = document.querySelector('.random-img');
const authorEl = document.querySelector('.author');
const likeEl = document.querySelector('.like');
const likeCountEl = document.querySelector('.like-count');
const historyEl = document.querySelector('.history');
const historyBoxEl = document.querySelector('.history-box');
let history = [];
let isFetching = false;
let isRandom = true;
const client_id = `VmQroNPOwLBp0FOJRcwGijMFtcNGVhonIRausP0eJAU`;

if (localStorage.getItem('history'))
    history = JSON.parse(localStorage.getItem('history'));

(async function () {
    try {
        const imageData = await getImageFetch();
        const imageDataLess = {
            id : imageData.id,
            url : imageData.urls.small,
            author : imageData.user.name,
            likes : imageData.likes,
            liked_by_user : imageData.liked_by_user
        }
        randomImgEl.src = imageDataLess.url;
        authorEl.textContent = imageDataLess.author;
        likeCountEl.textContent = imageDataLess.likes;

        if (localStorage.getItem(imageDataLess.id)) {
            if (imageDataLess.liked_by_user) likeEl.classList.add('clicked');
        } else {
            localStorage.setItem(imageDataLess.id, JSON.stringify(imageDataLess));
        }
        history.push(imageDataLess.id);
        localStorage.setItem('history', JSON.stringify(history));

        likeEl.addEventListener('click', () => {
            if (imageDataLess.liked_by_user) {
                imageDataLess.likes -= 1;
                imageDataLess.liked_by_user = false;
                likeEl.classList.remove('clicked');
            } else {
                imageDataLess.likes += 1;
                imageDataLess.liked_by_user = true;
                likeEl.classList.add('clicked');
            }
            likeCountEl.textContent = imageDataLess.likes;
            localStorage.setItem(imageDataLess.id, JSON.stringify(imageDataLess));
        })
    } catch (err) {
        console.error(err);
    }
})();

historyEl.addEventListener('click', async function() {
    isRandom = false;
    const imgHTML = await getImageFetch();
    historyBoxEl.insertAdjacentHTML('beforeend', imgHTML);
})

async function getImageFetch() {
    isFetching = true;
    try {
        if (isRandom) {
            const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${client_id}`)
            if (!response.ok) {
                throw new Error("Сервер встал")
            }
            return await response.json();
        } else {
            let imgString = "";

            for (const imgId of history) {
                const img = JSON.parse(localStorage.getItem(imgId));
                const response = await fetch(img.url);
                const blob = await response.blob();
                const imgUrl = URL.createObjectURL(blob);
                imgString += `<div class="photo"><img src="${imgUrl}" alt=""></div>`;
            }
            return imgString;
        }

    } catch (err) {
        throw err
    } finally {
        isFetching = false;
    }
}

