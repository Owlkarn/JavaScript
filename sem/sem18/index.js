// // Создать механизм для безопасного добавления метаданных к объектам книг с использованием Symbol.
// // Создать уникальные символы для метаданных: отзывы, рейтинг, теги.
// // Реализовать функции addMetadata (добавление метаданных) и getMetadata (получение метаданных).
// // Создать объект книги, добавить метаданные и вывести их на консоль.
//
// const reviewSymbol = Symbol('review');
// const ratingSymbol = Symbol('rating');
// const tagsSymbol = Symbol('tags');
//
//
// // Функция для добавления метаданных к объектам
// function addMetadata(book, metadataType, data) {
//     book[metadataType] = data;
// }
//
//
// // Функция для извлечения метаданных из объекта
// function getMetadata(book, metadataType) {
//     return book[metadataType];
// }
//
//
// // Создание объекта книги и добавление метаданных
// let book = {
//     title: "1984",
//     author: "George Orwell"
// };
//
//
// addMetadata(book, reviewSymbol, "Отличная книга о дистопии!");
// addMetadata(book, ratingSymbol, 5);
// addMetadata(book, tagsSymbol, "dystopia");
//
//
// // Вывод метаданных для книги
// console.log(getMetadata(book, reviewSymbol)); // ["Отличная книга о дистопии!"]
// console.log(getMetadata(book, ratingSymbol)); // [5]
// console.log(getMetadata(book, tagsSymbol)); // ["dystopia"]

// Используя Symbol.iterator, создайте объект "Библиотека", который можно итерировать.
// Каждая итерация должна возвращать следующую книгу из библиотеки.
// Создайте объект library, который содержит массив книг и имеет свойство-символ Symbol.iterator.
// Реализуйте кастомный итератор для объекта library. Итератор должен перебирать книги по порядку.
// Используйте цикл for...of для перебора книг в библиотеке и вывода их на консоль.
// Массив книг:
// const books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "Fahrenheit 451", author: "Ray Bradbury" }
// ];
//
// const library = {
//     books: [...books],
//     [Symbol.iterator]: function () {
//         let count = 0;
//         return {
//             next: (() => {
//                 if (count >= this.books.length) {
//                     return {
//                         done: true
//                     }
//                 } else {
//                     return {
//                         value: this.books[count++],
//                         done: false
//                     }
//                 }
//             })
//         }
//     }
// }
//
// for (const book of library) {
//     console.log(book.title, book.author);
// }
//
// console.log(library);

// const fibonacciSequence = {
//     [Symbol.iterator]: function () {
//         let a = 0, b = 1;
//
//         return {
//             next: function () {
//                 const value = a;
//                 a = b;
//                 b = value + b;
//                 return { value, done: false };
//             }
//         };
//     }
// };
//
// for (const number of fibonacciSequence) {
//     if (number > 1000) {
//         break;
//     }
//     console.log(number);
// }
//
// console.log(fibonacciSequence)

// Часто при работе с DOM мы сталкиваемся с коллекциями элементов,
//которые не являются стандартными массивами, но похожи на них.
//Однако у таких коллекций нет методов массива, и здесь на помощь приходит Array.from.
//В этом задании вы научитесь конвертировать коллекции DOM-элементов в массивы и работать с ними.
// Напишите функцию, которая собирает все элементы <div> на странице,
//преобразует их в массив и фильтрует только те из них,
//у которых есть атрибут data-active.
//Выведите результат на консоль.

// const divEls = Array.from(document.querySelectorAll('div')).filter(el => el.hasAttribute('data-active'));
// console.log(divEls);

// Текст задания:
// Представьте себе ситуацию: у нас есть группа студентов, и мы хотим отследить,
// кто из них посетил какие уроки и кто из преподавателей вёл данные уроки.
// Map будет использоваться для хранения соответствия между уроком и преподавателем.
// Set будет использоваться для хранения уникальных уроков, которые посетил каждый студент.
// 1. Map: урок => преподаватель
    let lessons = new Map();
lessons.set("Математика", "Смирнов").set("История", "Иванова");
// "Математика", "Смирнов"
// "История", "Иванова"


// 2. Map: студент => Set уроков
const studentIvan = {
    name: 'Ivan'
}

const ivanLessons = new Set();
ivanLessons.add("Математика").add("История");

const students = new Map();
students.set(studentIvan, ivanLessons);

// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: ${[...students.get(studentIvan)]}`); // Математика, История

function Student(name) {
    this.name = name;
    this.lessons = new Set;
    this.addedLesson = function (lesson)
    {
        this.lessons.add(lesson)
    }
}

arrayPetrov = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Petrov = new Student("Петров")
const Ivanov = new Student("Иванов")
arrayPetrov.forEach(item => {
    Petrov.addedLesson(item)
    Ivanov.addedLesson(item)
})

let Students = new Map();
Students.set(Petrov.name, Petrov.lessons)
Students.set(Ivanov.name, Ivanov.lessons)


// Проверка:
console.log(`Преподаватель по Математике: ${lessons.get("Математика")}`); // Смирнов
console.log(`Уроки Ивана: тут вывод уроков ивана ${Students}`); // Математика, История
console.log(Students)