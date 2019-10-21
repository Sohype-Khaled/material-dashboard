let menuToggle = document.getElementsByClassName('header__btn-menu')[0],
    body = document.getElementsByTagName('body')[0],
    mask = document.getElementsByClassName('mask')[0],
    searchToggle = document.getElementById('toggle-search'),
    searchInput = document.getElementsByClassName('header__search-input')[0];

menuToggle.addEventListener('click', function (e) {
    if (body.classList.contains("side-expanded"))
        body.classList.remove('side-expanded');
    else
        body.classList.add('side-expanded');
});

mask.addEventListener('click', function (e) {
    body.classList.remove('side-expanded');
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1280) body.classList.remove("side-expanded");
});

searchToggle.addEventListener('click', function () {
    if (searchInput.classList.contains('header__search-input-hidden')) {
        searchInput.focus();
        searchInput.classList.remove("header__search-input-hidden");
    } else {
        searchInput.blur();
        searchInput.classList.add("header__search-input-hidden");
    }
});