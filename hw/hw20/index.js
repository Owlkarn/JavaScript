// Вашей задачей является создание веб-слайдера для отображения
// изображений на веб-странице.
//
//     Создайте интерфейс веб-страницы, который включает в себя
//     следующие элементы:
//     a. Контейнер для отображения текущего изображения.
//     b. Кнопки "Предыдущее изображение" и "Следующее изображение"
//     для переключения между изображениями.
//     c. Навигационные точки (индикаторы) для быстрого
//     переключения между изображениями.
//
//     Для создания элементов интерфейса используйте HTML.
//     При клике на кнопку "Предыдущее изображение" должно
//     отображаться предыдущее изображение.
//     При клике на кнопку "Следующее изображение" должно
//     отображаться следующее изображение.
//     При клике на навигационные точки, слайдер должен
//     переключаться к соответствующему изображению.
//
//     Слайдер должен циклически переключаться между изображениями,
//     то есть после последнего изображения должно отображаться
//     первое, и наоборот.
//
//     Добавьте стилизацию для слайдера и элементов интерфейса
//     с использованием CSS для улучшения внешнего вида.

const sliderContainerEl = document.querySelector('.slider-container');
const sliderEl = sliderContainerEl.querySelector('.slider');
const imgEls = sliderEl.querySelectorAll('img');
const navEl = sliderContainerEl.querySelector('.navigation');
const prevBtnEl = sliderContainerEl.querySelector('.prev-btn');
const nextBtnEl = sliderContainerEl.querySelector('.next-btn');

for (let i = 0; i < imgEls.length; i++) {
    navEl.insertAdjacentHTML('beforeend', `<div class="dot" data-slide-index="${i}"></div>`);
}

navEl.querySelector('.dot[data-slide-index="0"]').classList.add('active');

const dotEls = navEl.querySelectorAll('.dot');
const arrayDots = Array.from(dotEls);

let slideIndex = 0;
const imgArray = Array.from(imgEls);

prevBtnEl.addEventListener('click', () => {
    slideIndex = (imgArray.length - 1 + slideIndex) % imgArray.length;
    imgStylesUpdate(slideIndex);
    activeDot(slideIndex);
});

nextBtnEl.addEventListener('click', () => {
    slideIndex = (1 + slideIndex) % imgArray.length;
    imgStylesUpdate(slideIndex);
    activeDot(slideIndex);
});

navEl.addEventListener('click', ({target}) => {
    dotEls.forEach((el) => {
        el.classList.remove('active');
    })
    if (target.matches('.dot')) {
        const dotIndex = parseInt(target.getAttribute('data-slide-index'));
        slideIndex = dotIndex;
        imgStylesUpdate(dotIndex);
        target.classList.add('active');
    }

})

function imgStylesUpdate(index) {
    imgArray.forEach(img => {
        if (index === imgArray.indexOf(img)) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    })
}

function activeDot(index) {
    arrayDots.forEach(el => {
        el.classList.remove('active');
        if (arrayDots.indexOf(el) === index) el.classList.add('active');
    });
}