// Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов.
// Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура.
// После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки.
// При следующем посещении сайта их индивидуальные настройки автоматически загружаются,
// и они видят ранее созданный мебельный комплект.
//
// 1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван)
// и возможными параметрами для них (цвет, материал, дизайн).
// 2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// 3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект",
// которая сохраняет текущий выбор пользователя в куки.
// 4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки
// и отобразите ранее созданный комплект.
// 5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).
//

const saveBtn = document.getElementById("save-btn");
const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const tableSelect = document.getElementById("table-color");
const chairSelect = document.getElementById("chair-material");
const saved = () => {

    //вариант 1
    // document.cookie = 'selectedTable='+encodeURIComponent(tableChoice);
    // document.cookie = 'selectedChair='+encodeURIComponent(chairChoice);

    Cookies.set('selectedTable', tableSelect.value);
    Cookies.set('selectedChair', chairSelect.value);

};

const loaded = () => {
    Cookies.get('selectedTable') !== undefined ?
        tableSelect.value = Cookies.get('selectedTable')
        : alert('Coockie not found');
    Cookies.get('selectedChair') !== undefined ?
        chairSelect.value = Cookies.get('selectedChair')
        : alert('Coockie not found')
};

const cleared = () => {
    Cookies.remove('selectedTable');
    Cookies.remove('selectedChair');

};

document.addEventListener('DOMContentLoaded', loaded);

saveBtn.addEventListener('click', saved);
loadBtn.addEventListener('click', loaded);
clearBtn.addEventListener('click', cleared);