// Создайте интерактивную веб-страницу для оставления и просмотра отзывов
// о продуктах. Пользователи могут добавлять отзывы о различных продуктах и
// просматривать добавленные отзывы.
//
// Страница добавления отзыва:
// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.
//
// Страница просмотра отзывов:
// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом,
// данный отзыв удаляется из LocalStorage).

const btnEl = document.querySelector('.btnSend');
const inputProdEl = document.querySelector('#inputProduct');
const inputCommEl = document.querySelector('#inputComment');

btnEl.addEventListener('click', () => {

    const productName = inputProdEl.value;
    const productComm = inputCommEl.value;
    let productComments =[];

    if (productComm.trim() !== '' && productName.trim() !== '') {
        if (localStorage.getItem(productName)) {
        productComments = JSON.parse(localStorage.getItem(productName));
        }
        productComments.push(productComm);
        localStorage.setItem(productName, JSON.stringify(productComments));
    }

    inputProdEl.value = '';
    inputCommEl.value = '';
});









