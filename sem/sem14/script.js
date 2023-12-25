// 1. Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// 2. Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
//     Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]

const removeDuplicates = (...values) => {
    return values.filter((item, pos) => values.indexOf(item) === pos);
};
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

const removeDuplicatesSet = (...values) => {
    const setArgs = new Set(values);
    return [...setArgs];
};
console.log(removeDuplicatesSet(1, 2, 3, 2, 4, 1, 5));

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
//     содержащий только четные числа.

const  getEvenNumbers = (...arr) => {
    return arr.filter((num) => num % 2 === 0);
}

console.log(getEvenNumbers(1, 2, 3, 2, 4, 1, 5));

// 2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.

const  calculateAverage = (...arr) => {
    return arr.reduce((sum, num) => sum + num) / arr.length;
}

console.log(calculateAverage(1, 2, 3, 2, 4, 1, 5));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

const  capitalizeFirstLetter = (string) => {
    return string.split(/\s+/).map(word => (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
}

console.log(capitalizeFirstLetter('Привет привет привет привкт'));

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
//     Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
//     Значение должно быть доступно только через методы объекта, а не
// напрямую.

const createCalculator = (num) => {

    return {
        add: (value) => {
            num += value;
        },
        subtract: (value) => {
            num -= value;
        },
        getValue : () => {
            return num;
        }
    }
}

let vl = createCalculator(1);
vl.add(6);
vl.subtract(2);
console.log(vl.getValue());

// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// // Пример использования:
//     const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (name) => {
    return () => {
        console.log(`Hello, ${name}!`);
    }
}
const greeting = createGreeting('John');
greeting();

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
//     Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// // Пример использования:
//     const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат:
// false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

const createPasswordChecker = (passLength) => {
    return (password) => {
        return password.length < passLength;
    }
}
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret'));

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
//     // Пример использования:
//     console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)

const sumDigits = (number) => {
    if (number < 10) {
        return number;
    }
    return sumDigits(Math.floor(number / 10)) + number % 10;
}

console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)