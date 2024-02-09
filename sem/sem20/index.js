// Вы разрабатываете прототип веб-приложения для чтения новостей.
// Статьи "хранятся" во внутреннем массиве (имитируя базу данных).
// Когда пользователь нажимает на кнопку "Загрузить новости",
// ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника,
// а после этой задержки — отображать новости на странице.
//Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.
//Реализуйте функцию fetchNews(), возвращающую промис.
// Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных
// из "виртуальной" базы данных.
// Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
//При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(),
// обрабатывая успешное выполнение и ошибки с использованием then() и catch().
//При успешной загрузке отобразите статьи на странице.
// При ошибке покажите сообщение об ошибке.
//Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей
// и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).

const mockDatabase = [
    { title: "Новость 1", content: "Содержимое новости 1..." },
    { title: "Новость 2", content: "Содержимое новости 2..." },
// ... другие статьи
];

const fetchNews = () => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          Math.random() > 0.1 ? resolve(mockDatabase) : reject("Errorrrr");
      }, 2000);
  });
}

const renderNews = (newsBase, div) => {
    newsBase.forEach((news) => {
        const newsTitle = document.createElement('p');
        const newsContent = document.createElement('p');
        newsTitle.textContent = news.title;
        newsContent.textContent = news.content;
        div.appendChild(newsTitle);
        div.appendChild(newsContent);
    })
}

const btn = document.querySelector('button');
const div = document.querySelector('div');

btn.addEventListener('click', () => {
    btn.disabled = true;
    div.innerHTML = ''
    fetchNews()
        .then((data) => {
            renderNews(data, div);
        })
        .catch((error) => {
            alert(error);
        })
        .finally(() => {
        // Включаем кнопку загрузки после завершения операции
        btn.disabled = false;
    });
});