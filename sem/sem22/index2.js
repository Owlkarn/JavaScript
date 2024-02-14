// Задание 4
//
// Вам предоставляется задача создать простой онлайн опросник,
// который позволяет пользователям
// отвечать на вопросы с вариантами ответов.
// Ваша задача - разработать интерфейс и функциональность
// для этого опросника, используя HTML, CSS и JavaScript.
// 1. Создайте интерфейс с несколькими вопросами и вариантами ответов.
// Каждый вопрос должен иметь несколько вариантов ответов.
// 2. Реализуйте обработку событий, чтобы пользователи могли выбирать
// варианты ответов.
// 3. Добавьте кнопку "Завершить опрос", которая будет показывать
// результаты опроса.
// 4. При нажатии на кнопку "Завершить опрос", вы должны проверить,
// что пользователь ответил на все
// вопросы, и отобразить выбранные им варианты ответов.
// 5. Если пользователь не ответил на все вопросы, покажите ему сообщение о
// необходимости ответить
// на все вопросы перед завершением опроса.
// 6. По желанию можно добавить стилизацию опросника с использованием CSS
// для лучшего пользовательского опыта.

const submitBtnEl = document.querySelector('#submit');
const resultsDivEl = document.querySelector('.result');
const firstAnswerEl = resultsDivEl.querySelector('#result-q1');
const secondAnswerEl = resultsDivEl.querySelector('#result-q2');
const firstRadioButtons = document.querySelectorAll('input[name="q1"]');
const secondRadioButtons = document.querySelectorAll('input[name="q2"]');
const firstAnswerTextEl = firstAnswerEl.querySelector('span');
const secondAnswerTextEl = secondAnswerEl.querySelector('span');

submitBtnEl.addEventListener('click', () => {

    firstRadioButtons.forEach((el) => {
        if (el.checked) {
            firstAnswerTextEl.textContent = el.value;
        }
    })
    secondRadioButtons.forEach((el) => {
        if (el.checked) {
            secondAnswerTextEl.textContent = el.value;
        }
    })
    if(firstAnswerTextEl.textContent === '' || secondAnswerTextEl.textContent === '') {
        alert('Enter all')
    } else {
        resultsDivEl.style.display = 'block';
    }
})


//Вариант 2
// <!DOCTYPE html>
// <html lang="en">
//
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Modal Window</title>
//   <style>
//     body {
//       font-family: Arial, sans-serif;
//     }
//
//     .question {
//       margin-bottom: 20px;
//     }
//
//     .options {
//       display: flex;
//       flex-direction: column;
//     }
//
//     label {
//       cursor: pointer;
//       margin-bottom: 10px;
//     }
//
//     .result {
//       font-weight: bold;
//     }
//   </style>
// </head>
//
// <body>
//   <div class="question">
//     <p>Вопрос 1: Какой ваш любимый цвет?</p>
//     <div class="options">
//       <label>
//         <input type="radio" name="q1" value="Синий"> Синий
//       </label>
//       <label>
//         <input type="radio" name="q1" value="Зеленый"> Зеленый
//       </label>
//       <label>
//         <input type="radio" name="q1" value="Красный"> Красный
//       </label>
//     </div>
//   </div>
//
//   <div class="question">
//     <p>Вопрос 2: Какое ваше любимое животное?</p>
//     <div class="options">
//       <label>
//         <input type="radio" name="q2" value="Собака"> Собака
//       </label>
//       <label>
//         <input type="radio" name="q2" value="Кот"> Кот
//       </label>
//       <label>
//         <input type="radio" name="q2" value="Попугай"> Попугай
//       </label>
//     </div>
//   </div>
//
//   <button id="submit">Завершить опрос</button>
//
//   <div class="result" style="display: none;">
//     <p>Результаты:</p>
//     <p id="result-q1">Вопрос 1: <span></span></p>
//     <p id="result-q2">Вопрос 2: <span></span></p>
//   </div>
// </body>
//
// </html>
// ```

// const questionsEl = document.querySelectorAll(".question");
// const btnSubmitEl = document.getElementById("submit");
// const resultEl = document.querySelector(".result");
// const errorTextEl = document.querySelector(".errortext");
// btnSubmitEl.addEventListener("click", function () {
//     const resultArray = [];
//     questionsEl.forEach(questionEl => {
//         const valueInput = questionEl.querySelector("input:checked")?.value;
//         if (valueInput === undefined) {
//             questionEl.classList.add("error");
//         } else {
//             questionEl.classList.remove("error");
//             resultArray.push(valueInput)
//         }
//     })
//     if (resultArray.length === questionsEl.length) {
//         resultEl.style.removeProperty("display");
//
//         resultArray.forEach((answer, index) => {
//             resultEl.insertAdjacentHTML("beforeend", `
//         <p id="result-q${index + 1}">Вопрос ${index + 1}: <span>${answer}</span></p>`)
//         })
//         btnSubmitEl.disabled = true;
//         errorTextEl.textContent = "ответил на все вопросы";
//     } else {
//         errorTextEl.textContent = "не на все вопросы получены ответы"
//     }
// })
