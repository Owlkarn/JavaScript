// Создать интерактивную веб-страницу, которая позволяет
// пользователям регистрироваться и входить в систему,
// используя данные, сохраненные в LocalStorage.
//
//Приложение будет состоять из трёх основных страниц:
//
//1. Страница регистрации:
//1. Предлагает пользователю ввести логин и пароль.
// 2. После ввода данных, они сохраняются в LocalStorage.
// 3. Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
// 1. Предлагает пользователю ввести логин и пароль.
// 2. Если введенные данные совпадают с данными из LocalStorage,
// пользователь перенаправляется на страницу приветствия.
// 3. Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
// 1. Простое приветственное сообщение для авторизованного
// пользователя.
// 2. Кнопка "Выйти", при нажатии на которую пользователь
// возвращается на страницу входа.

const submitBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');
const logoutBtn = document.querySelector('.logout-btn');

const getUserData = () => {
    const username = document.querySelector('.username-input').value;
    const pass = document.querySelector('.password-input').value
    const usernamePassData = {
        username: username,
        password: pass
    }
    return JSON.stringify(usernamePassData);
};

try {
    submitBtn.addEventListener('click', () => {
        const username = document.querySelector('.username-input').value;

        localStorage.setItem(username, getUserData());
        window.location.href = "enter.html";
    });
} catch (e) {
}

try {
    loginBtn.addEventListener('click', () => {
        const username = document.querySelector('.username-input').value;
        const errorEl = document.querySelector('.error-message');
        console.log('errorEl');
        console.log(JSON.parse(getUserData()));

        if (getUserData() === localStorage.getItem(username)) {
            window.location.href = "hello.html";
        } else {
            errorEl.textContent = 'Wrong Data';
        }
    });
} catch (e) {
}

try {
    logoutBtn.addEventListener('click', () => {
        window.location.href = "reg.html";
    })
} catch (e) {
}

