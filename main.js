function menuShow() {
    
    let menuMobile = document.querySelector('.menu_list');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

document.getElementById('menu_button').addEventListener('click', menuShow);