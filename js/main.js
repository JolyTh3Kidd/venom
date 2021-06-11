const menuButton = document.querySelector('.menu_button');
const menu = document.querySelector('.nav_menu');
const menuCloseButton = document.querySelector('.menu_close');

menuButton.addEventListener("click", () => {
    menu.classList.add("is_active");
    menuCloseButton.classList.add("is_active");
});
menuCloseButton.addEventListener("click", () => {
    menu.classList.remove("is_active");
    menuCloseButton.classList.remove("is_active");
});