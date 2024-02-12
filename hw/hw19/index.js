// Необходимо создать веб-страницу с динамическими элементами
// с расписанием занятий.
//
//     На странице должна быть таблица с расписанием занятий,
//     на основе JSON-данных.
//     Каждая строка таблицы должна содержать информацию о занятии,
//     а именно:
//     - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"
//
// Если максимальное количество участников достигнуто,
// либо пользователь уже записан на занятие, сделайте кнопку "записаться"
// неактивной.
//     Кнопка "отменить запись" активна в случае,
//     если пользователь записан на занятие,
//     иначе она должна быть неактивна.
//
//     Пользователь может записаться на один курс только один раз.
//
//     При нажатии на кнопку "записаться" увеличьте количество
//     записанных участников.
//     Если пользователь нажимает "отменить запись", уменьшите
//     количество записанных участников.
//     Обновляйте состояние кнопок и количество участников
//     в реальном времени.
//
//     Если количество участников уже максимально,
//     то пользователь не может записаться, даже если он не
//     записывался ранее.
//
//     Сохраняйте данные в LocalStorage, чтобы они сохранялись и
//     отображались при перезагрузке страницы.
//
//     Начальные данные (JSON):
//
// [
//     {
//         "id": 1,
//         "name": "Йога",
//         "time": "10:00 - 11:00",
//         "maxParticipants": 15,
//         "currentParticipants": 8
//     },
//     {
//         "id": 2,
//         "name": "Пилатес",
//         "time": "11:30 - 12:30",
//         "maxParticipants": 10,
//         "currentParticipants": 5
//     },
//     {
//         "id": 3,
//         "name": "Кроссфит",
//         "time": "13:00 - 14:00",
//         "maxParticipants": 20,
//         "currentParticipants": 15
//     },
//     {
//         "id": 4,
//         "name": "Танцы",
//         "time": "14:30 - 15:30",
//         "maxParticipants": 12,
//         "currentParticipants": 10
//     },
//     {
//         "id": 5,
//         "name": "Бокс",
//         "time": "16:00 - 17:00",
//         "maxParticipants": 8,
//         "currentParticipants": 6
//     }
// ]

const localStorageKey = "lessons";
const userLessonsLocalStorageKey = 'userLessons';
const initialUserLessons = '[]';
const initialLessons = `[
    {
        "id": 1,
        "name": "Йога",
        "time": "10:00 - 11:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    },
    {
        "id": 2,
        "name": "Пилатес",
        "time": "11:30 - 12:30",
        "maxParticipants": 10,
        "currentParticipants": 5
    },
    {
        "id": 3,
        "name": "Кроссфит",
        "time": "13:00 - 14:00",
        "maxParticipants": 20,
        "currentParticipants": 15
    },
    {
        "id": 4,
        "name": "Танцы",
        "time": "14:30 - 15:30",
        "maxParticipants": 12,
        "currentParticipants": 10
    },
    {
        "id": 5,
        "name": "Бокс",
        "time": "16:00 - 17:00",
        "maxParticipants": 8,
        "currentParticipants": 6
    }
]`

const saveData = (key, array) => {
    localStorage.setItem(key, JSON.stringify(array))
}

if (!localStorage.getItem(localStorageKey)) {
    localStorage.setItem(localStorageKey, initialLessons)
}
if (!localStorage.getItem(userLessonsLocalStorageKey)) {
    localStorage.setItem(userLessonsLocalStorageKey, initialUserLessons);
}

const lessonsData = JSON.parse(localStorage.getItem(localStorageKey));
const usersData = JSON.parse(localStorage.getItem(userLessonsLocalStorageKey));
const listLessonsEl = document.querySelector(".list-lessons");

lessonsData.forEach(lesson => {
    listLessonsEl.insertAdjacentHTML("beforeend", `
            <div class="lessonName" data-id="${lesson.id}">${lesson.name}
                <div class="time">${lesson.time}</div>
                <div class="maxText">Максимальное количество:</div>
                <div class="maxNumber">${lesson.maxParticipants}</div>
                <div class="currentText">Текущее количество:</div>
                <div class="currentNumber">${lesson.currentParticipants}</div>
                <button class="btnAdd">Записаться</button>
                <button class="btnRemove">Отменить запись</button>
            </div>
    `)
    const currentLesson = document.querySelector(`.lessonName[data-id='${lesson.id}']`)
    const btnAddEl = currentLesson.querySelector('.btnAdd');
    const btnRemoveEl = currentLesson.querySelector('.btnRemove');
    const currentNumberEl = currentLesson.querySelector('.currentNumber');
    const maxNumberEl = currentLesson.querySelector('.maxNumber');
    const current = parseInt(currentNumberEl.textContent);
    const max = parseInt(maxNumberEl.textContent);

    if (!isNaN(max) &&
        !isNaN(current)) {
        if (current >= max) btnAddEl.disabled = true;
    }

    if (usersData.includes(lesson.name)) {
        btnAddEl.disabled = true;
        btnRemoveEl.disabled = false;
    } else btnRemoveEl.disabled = true;

});

listLessonsEl.addEventListener('click', ({target})=> {
    if (target.matches(".btnAdd")) {
        const fatherEl = target.closest(".lessonName");
        const currentNumberEl = fatherEl.querySelector(".currentNumber");
        const btnRemoveEl = fatherEl.querySelector(".btnRemove");
        let current = parseInt(currentNumberEl.textContent);

        if (!isNaN(current)) {
            currentNumberEl.textContent = current + 1;
            target.disabled = true;
            btnRemoveEl.disabled = false;

            const newData = lessonsData.find(lesson => {
                return (lesson.id === +fatherEl.dataset.id);
            })
            newData.currentParticipants = currentNumberEl.textContent;
            saveData(localStorageKey, lessonsData);

            usersData.push(newData.name);
            saveData(userLessonsLocalStorageKey, usersData);
        }
    } else if (target.matches(".btnRemove")) {
        const fatherEl = target.closest(".lessonName");
        const currentNumberEl = fatherEl.querySelector(".currentNumber");
        const btnAddEl = fatherEl.querySelector(".btnAdd");
        let current = parseInt(currentNumberEl.textContent);

        if (!isNaN(current)) {
            currentNumberEl.textContent = current - 1;
            target.disabled = true;
            btnAddEl.disabled = false;

            const newData = lessonsData.find(lesson => {
                return (lesson.id === +fatherEl.dataset.id);
            })
            newData.currentParticipants = currentNumberEl.textContent;
            saveData(localStorageKey, lessonsData);

            usersData.splice(usersData.indexOf(newData.name), 1);
            saveData(userLessonsLocalStorageKey, usersData);
        }
    }
})