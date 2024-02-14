// Вам необходимо создать навигационное меню для веб-сайта, в
// котором меняется активный пункт при клике без фактического
// перехода на другие страницы. Меню должно обладать следующими
// характеристиками:
//     1. Подсветка активного пункта: При клике на пункт меню он
// должен становиться активным, и для активного пункта должен
// применяться определенный стиль (например, изменение цвета
// фона). Если выбрать другой пункт, предыдущий должен
// перестать быть активным.
// 2. Эффекты наведения: При наведении курсора на пункты меню
// должны применяться эффекты (например, изменение цвета
// текста или фона) для подсказки пользователю, что пункт меню
// является интерактивным.

const menuEl = document.querySelector('.menu');
const listLink = menuEl.querySelectorAll('.menu__link');
const popUpEl = document.querySelector('.popup');
const closePopUpEl = popUpEl.querySelector('.close-popUp');
menuEl.addEventListener('click', ({target}) => {
    if (target.matches('.menu__link')) {
        [...listLink].find(item => item
            .classList.contains('active'))
            .classList.remove('active')
        target.classList.add('active');
        if (target.classList.contains('open-popUp')) {
            popUpEl.classList.add('d-none');
        }
    }
})

closePopUpEl.addEventListener('click', () => {
    popUpEl.classList.remove('d-none');
})

// Задание 2.
//
// Создайте простое модальное окно, которое появляется при клике
// на кнопку "Открыть модальное окно" и закрывается при клике на
// кнопку "Закрыть". Модальное окно должно содержать заголовок
// "Модальное окно" и кнопку для закрытия. Модальное окно должно
// плавно появляться и исчезать при открытии и закрытии.

// Задание 3.
//
// У вас есть кнопка "Купить". Создайте скрипт, который при клике
// на эту кнопку меняет её текст на "Товар добавлен в корзину" в
// течение 2 секунд, а затем возвращает исходный текст "Купить".
//     В обработчике события клика также проверьте, является ли
// событие доверенным (event.isTrusted). Если событие является
// доверенным, выполните изменение текста кнопки и убедитесь,
//     что после 2 секунд текст возвращается в исходное состояние.

const buyBtnEl = document.querySelector('.btn__buy');

buyBtnEl.addEventListener('click', (event) => {
    if (event.isTrusted){
        buyBtnEl.textContent = "Товар добавлен в корзину";
        setTimeout(() => {
            buyBtnEl.textContent = "Купить";
        }, 2000);
    }
})

const clickEvent = new Event('click');

// Вызываем обработчик события
buyBtnEl.dispatchEvent(clickEvent);