// // Задание 1
// Класс должен содержать приватное свойство #balance,
// которое инициализируется значением 0 и представляет собой текущий баланс счета.
//     Реализуйте геттер balance, который позволит получить информацию о текущем балансе.
//     Реализуйте метод deposit(amount), который позволит вносить средства на счет.
//     Убедитесь, что сумма внесения не отрицательная; в противном случае выбрасывайте ошибку.
//     Реализуйте метод withdraw(amount), который позволит снимать средства со счета.
//     Убедитесь, что сумма для снятия неотрицательная и что на счете достаточно средств;
//     в противном случае выбрасывайте ошибку.
//     Реализуйте конструктор, который принимает начальный баланс в качестве аргумента.
//     Убедитесь, что начальный баланс не отрицательный; в противном случае выбрасывайте ошибку.
//
// class Account {
//     #balance = 0;
//     get balance() {
//         return this.#balance;
//     }
//     deposit(amount) {
//         if (isNaN(amount) || amount < 0) throw new Error('некорректное значение');
//         this.#balance += amount;
//     }
//
//     withdraw(amount) {
//         if (isNaN(amount) || amount < 0 || amount > this.#balance) throw new Error('некорректное значение');
//         this.#balance -= amount;
//     }
//
//     constructor(balance) {
//         if (isNaN(balance) || balance < 0) throw new Error('некорректное значение');
//         this.#balance = balance;
//     }
// }
//
// const ac = new Account(100);
//
// ac.deposit(20);
// ac.withdraw(50);
// console.log(ac.balance);

// Задание 2
// У вас есть базовый список пользователей. Некоторые из них имеют информацию о своем премиум аккаунте,
// а некоторые - нет. Ваша задача - создать структуру классов для этих пользователей и
// функцию для получения информации о наличии премиум аккаунта, используя
// Опциональную цепочку вызовов методов, оператор нулевого слияния и instanceof.
// Создайте базовый класс User с базовой информацией (например, имя и фамилия).
// Создайте классы PremiumUser и RegularUser, которые наследуются от User.
// Класс PremiumUser должен иметь свойство premiumAccount (допустим, дата истечения срока действия),
// а у RegularUser такого свойства нет.Создайте функцию getAccountInfo(user),
// которая принимает объект класса User и возвращает информацию о наличии и
// сроке действия премиум аккаунта, используя Опциональную цепочку вызовов методов и оператор нулевого слияния.
//     В функции getAccountInfo используйте instanceof для проверки типа
//     переданного пользователя и дайте соответствующий ответ.

// class User {
//
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//
//     }
// }
//
// class PremiumUser extends User {
//     constructor(name, surname, premiumAccount) {
//         super(name, surname);
//         this.premiumAccount = premiumAccount;
//     }
// }
//
// class RegularUser extends User {
//     constructor(name, surname) {
//         super(name, surname);
//     }
// }
//
// function getAccountInfo (user) {
//     if (user instanceof PremiumUser) return user?.premiumAccount ?? 'No data';
//     else return 'Not a premium';
// }
//
// const regUs = new RegularUser('q', 'w');
// const premUs = new PremiumUser('a', 's', new Date(2025, 1, 31));
// const premUs2 = new PremiumUser('d', 'f');
//
// console.log(getAccountInfo(regUs));
// console.log(getAccountInfo(premUs));
// console.log(getAccountInfo(premUs2));

// Задание 3
// Вы создаете интерфейс, где пользователь вводит число. Ваша задача — проверить, является ли
// введенное значение числом или нет, и дать соответствующий ответ.
// Создайте HTML-структуру:
// текстовое поле для ввода числа и кнопку "Проверить".
//     Добавьте место (например, div) для вывода сообщения пользователю.
//     Напишите функцию, которая будет вызвана при нажатии на кнопку.
//     Эта функция должна использовать try и catch для проверки вводимого значения.

// const btnEl = document.querySelector('button');
// const inputEl = document.querySelector('#numberInput');
// const divEl = document.querySelector('div');
// const newElement = document.createElement('p');
//
// const checkNumber = (value, el, newEl) => {
//     const num = value;
//     try {
//         const parsedNum = parseInt(num);
//
//         if (!isNaN(parsedNum)) {
//             newEl.innerHTML = parsedNum + ' - число';
//         } else {
//             throw new Error('Ошибка преобразования в число');
//         }
//     } catch (e) {
//         newEl.innerHTML = num + ' - не число: ' + e.message;
//     }
//
//     el.appendChild(newEl);
// }
//
// btnEl.onclick = () => {
//     checkNumber(inputEl.value, divEl, newElement);
// }

// вариант 2

// const btn = document.querySelector('button');
// const div = document.querySelector('div');
// const input = document.querySelector('input');
// function validation (){
//     try {
//     if (isNaN(Number(input.value)) || input.value === ''){
//         throw new Error('this is not a number');
//     }
//     div.textContent = 'congratulations!!!'
//     }
//     catch (error) {
//         div.textContent = error.message;
//     }
// }
// btn.addEventListener('click', validation);

// Задание 3
// Пользователи вашего сайта могут добавлять элементы в список.
// Но есть условие: введенное значение должно содержать от 3 до 10 символов.
// Создайте HTML-структуру с текстовым полем, кнопкой и списком.
// Напишите функцию, которая будет добавлять элементы в список
// или генерировать исключение, если длина введенного значения не соответствует требованиям.

const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const div = document.querySelector('div');
function addToList(){
    div.textContent = '';
    try{
        if (input.value.length < 3 || input.value.length > 10){
        throw new Error ('Or too short or too long');
        }
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }
    catch (error){
        div.textContent = error.message;
    }
    finally{
        console.log("We finished");
    }
}
btn.addEventListener('click', addToList);

