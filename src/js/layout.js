let menuToggle = document.getElementsByClassName('header__menu-btn')[0],
    body = document.getElementsByTagName('body')[0],
    mask = document.getElementsByClassName('mask')[0];

menuToggle.addEventListener('click', function (e) {
    if (body.classList.contains("side-expanded"))
        body.classList.remove('side-expanded');
    else
        body.classList.add('side-expanded');
});

mask.addEventListener('click', function (e) {
    body.classList.remove('side-expanded');
});