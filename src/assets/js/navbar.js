var btnn = document.querySelector('#menu-btn');
var menu = document.querySelector('#sidemenu');
var menu2 = document.querySelector('#main-container1');
var x = new Boolean(false);

btnn.addEventListener('click', e => {
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
    menu2.classList.toggle("content1");
    menu2.classList.toggle("content2");

    document.querySelector('body').classList.toggle('body-expanded');
});