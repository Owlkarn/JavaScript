"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию
(нужно будет ее создать), которая будет принимать введенное пользователем
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

/**
 *
 * @param {number} num
 * @returns {number}
 */

const salary = (num) => num * 0.87;
const number = Number(prompt("Введите число"));

console.log(!Number.isNaN(number) ? salary(number) : "Значение задано неверно");
