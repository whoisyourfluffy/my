function toggleMenu() {
    const menu = document.querySelector('.menu-container');
    const hamburger = document.querySelector('.menu-toggle'); // Кнопка гамбургер
    menu.classList.toggle('open'); // Переключаем класс open у меню

    // Когда меню открыто, скрываем кнопку гамбургер
    if (menu.classList.contains('open')) {
        hamburger.style.opacity = '0'; // Кнопка исчезает
    } else {
        hamburger.style.opacity = '1'; // Кнопка появляется
    }
}

// Закрываем меню при клике вне его
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu-container');
    const hamburger = document.querySelector('.menu-toggle');

    // Проверяем, был ли клик не по меню и не по кнопке гамбургер
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('open');
        hamburger.style.opacity = '1'; // Кнопка гамбургер появляется, если меню закрывается
    }
});
