"use strict";

/*
Необходимо создать объект, в котором будут объединены два массива en и ru
так, чтобы в объекте ключами выступали значения из массива en, а значениями
объекта являлись значения из массива ru.
*/

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

// const arrayComb = {};
//
// for (let i = 0; i < en.length; i++) {
//     arrayComb[en[i]] = ru[i];
// }

const arrayComb = en.reduce((object, key, i) =>
{object[key] = ru[i];
return object;
}, {});

console.log(arrayComb);
