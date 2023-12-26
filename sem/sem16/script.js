// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

const getPrototypeChain = (obj) => {
    const prototypeChain = [];
    let currentObject = obj;

    while (currentObject !== null) {
        prototypeChain.push(currentObject);
        currentObject = Object.getPrototypeOf(currentObject);
    }
    return prototypeChain;
}
// Пример использования
const sampleObject = {};
const chain = getPrototypeChain(sampleObject);
console.log(chain);

// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
//     ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
//     Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
//     ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

class Animal {
    constructor(name) {
        this.name = name
    }
    speak = () => {
        console.log(`${this.name} издает звук.`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed
    }
    speak() {
        console.log(`Животное ${this.name} издает звук.`);
    }
    fetch = () => {
        console.log(`Собака ${this.name} принесла мяч.`)
    }
}

const animal1 = new Animal("Животное");
animal1.speak(); // Вывод: Животное издает звук.
const dog1 = new Dog("Бобик", "Дворняжка");
dog1.speak(); // Вывод: Животное Бобик издает звук.
console.log(dog1.breed); // Вывод: Дворняжка
dog1.fetch(); // Вывод: Собака Бобик принесла мяч.

// Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".
//     Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту",
//     которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле "максимальный возраст",
//     которое будет задавать максимально допустимый возраст для всех создаваемых объектов.

class User {
    #name;
    #age;
    #email;
    static maxAge = 50;

    constructor(name, age, email) {
        this.#name = name;
        this.age(age);
        this.#email = email;
    }

    set name(value) {
        this.#name = value;
    }

    set age(value) {
        value < User.maxAge ? this.#age = value : console.error(`${value} > ${User.maxAge}`);
    }

    set email(value) {
        this.#email = value;
    }
}

const us = new User('john', 30, 'dfvfd');
us.name = 'down';
console.log(us);