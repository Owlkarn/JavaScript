"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const maxNumber = (numbers) => Math.max(...numbers);// не написано же в каком виде передаются числа в функцию :)

const arrayNum = prompt("Введите три числа через пробел").split(" ");
console.log(`Максимальное значение среди чисел ${arrayNum[0]}, ${arrayNum[1]}, ${arrayNum[2]} равно ${maxNumber(arrayNum)}.`)
