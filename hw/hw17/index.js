// Задание 1
// Представьте, что у вас есть класс для управления библиотекой.
// В этом классе будет приватное свойство для хранения списка книг,
// а также методы для добавления книги, удаления книги и получения информации о наличии книги.
//
//     Класс должен содержать приватное свойство #books,
//     которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
//
//     Реализуйте геттер allBooks, который возвращает текущий список книг.
//
//     Реализуйте метод addBook(title), который позволяет добавлять книгу в список.
//     Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
//
//     Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию.
//     Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
//
//     Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке 
//     и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
//
//     Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента.
//     Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

// class Library {
//     #books = [];
//
//     constructor(books) {
//         try {
//             if (new Set(books).size !== books.length) throw new Error('Список содержит одинаковые книги');
//             this.#books = books;
//         } catch (e) {
//             console.log(e);
//         }
//
//     }
//
//     get allBooks () {
//         return this.#books;
//     }
//
//     hasBook(title) {
//         return this.#books.includes(title);
//     }
//
//     addBook(title) {
//         try {
//             if (this.hasBook(title)) throw new Error('Такая книга уже есть');
//         } catch (e) {
//             console.log(e);
//         }
//
//         this.#books.push(title);
//     }
//
//     removeBook(title) {
//         try {
//             if (!this.hasBook(title)) throw new Error('Такой книги нет');
//         } catch (e) {
//             console.log(e);
//         }
//
//         const i = this.#books.indexOf(title);
//         this.#books.splice(i, 1);
//     }
// }
//
// const lib1 = new Library(['q', 'w', 'e']);
// const lib2 = new Library(['q', 'w', 'q']);
//
// console.log(lib1.hasBook('q'));
// lib1.addBook('r');
// lib1.addBook('r');
// lib1.removeBook('w');
// lib1.removeBook('s');
// console.log(lib1.allBooks);



// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта.
// Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие
// или слишком длинные сообщения, вы решаете установить некоторые ограничения.
//
//Создайте HTML-структуру с текстовым полем для ввода отзыва,
// кнопкой для отправки и контейнером, где будут отображаться отзывы.
//
//Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
//Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
//
//При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const btnEl = document.querySelector('button');
const inputEl = document.querySelector('#input');
const divEl = document.querySelector('div');

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

initialData.forEach(item => {
    item.reviews.forEach(elem => {
        const newElement = document.createElement('p');
        newElement.textContent = elem.text;
        divEl.appendChild(newElement);
    })
})

function addComment(){
    try{
        if (inputEl.value.length < 50 || inputEl.value.length > 500){
            throw new Error ('Or too short or too long');
        }
        const newElement = document.createElement('p');
        newElement.textContent = inputEl.value;
        divEl.appendChild(newElement);
        inputEl.value = '';
    }
    catch (e){
        alert(e);
    }
}

btnEl.addEventListener('click', addComment);


