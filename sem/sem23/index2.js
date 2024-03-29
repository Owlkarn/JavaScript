// Задача 2.
//
// Бесконечная лента фотографий
// Для создания бесконечной ленты с фотографиями с использованием
// Unsplash API, выполните следующие шаги:
//     1. Зарегистрируйтесь на Unsplash:
//      ○ Перейдите на веб-сайт Unsplash (https://unsplash.com/).
// ○ Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт,
// если у вас его еще нет.
// ○ Войдите в свой аккаунт Unsplash.
//
// 2. Создайте приложение:
//     ○ После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash
// (https://unsplash.com/developers).
// ○ Нажмите на кнопку "Your apps".
// ○ Нажмите "New Application" (Новое приложение).
// ○ Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете
// использовать http://localhost для тестового сайта).
//     ○ После заполнения информации, нажмите "Create Application" (Создать приложение).
//
// 3. Получите API-ключ:
// ○ После создания приложения, вы получите API-ключ. Этот ключ будет
// отображаться в вашей панели управления приложением.
// ○ API-ключ представляет собой строку вида YOUR_ACCESS_KEY.
//     Скопируйте его.
// 4. Измените код HTML и JavaScript:
//     ○ Откройте вашу HTML-страницу в текстовом редакторе или
// интегрированной среде разработки.
// ○ Замените 'YOUR_ACCESS_KEY' в коде JavaScript на ваш собственный
// API-ключ.
//
// 5. Реализуйте загрузку фотографий при открытии страницы.
//
// 6. Реализуйте бесконечную подгрузку фотографий при прокручивании страницы.

const getNumPage = counter();
let isFetching = false;
const photoContentEl = document.getElementById("photo-container");
const client_id = `здесь ваш ключ`; //Здесь ваш ключ

try {
    const fotoData = await getImagesFetch(getNumPage());
    render(fotoData);
} catch (err) {
    alert(err)
}

window.addEventListener("scroll", async function () {
    if (isFetching) {
        return;
    }
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    if (document.documentElement.scrollTop > scrollHeight * 0.70) {
        try {
            const fotoData = await getImagesFetch(getNumPage());
            render(fotoData);
        } catch (err) {
            alert(err)
        }
    }
})

function render(fotoData) {
    const html = showPicture(fotoData);
    photoContentEl.insertAdjacentHTML("beforebegin", html)
}

async function getImagesFetch(numPage) {
    isFetching = true;
    try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${client_id}&page=${numPage}`)
        if (!response.ok) {
            throw new Error("Сервер встал")
        }
        return await response.json();
    } catch (err) {
        throw err
    } finally {
        isFetching = false;
    }
}

function showPicture(array) {
    let imgString = "";
    for (const arrayElement of array) {
        imgString += `<div class="photo">
            <img src="${arrayElement.urls.small}">
        </div>
        `
    }
    return imgString;
}

function counter() {
    let count = 1
    return function () {
        return count++
    }
}