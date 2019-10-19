let dropDowns = document.getElementsByClassName('dropdown');
console.log(dropDowns);

for (let dropDown of dropDowns) {
    let dropDownToggle = dropDown.querySelector('.dropdown__toggle'),
        dropDownMenu = dropDown.querySelector('.dropdown__menu');
    dropDownToggle.addEventListener('click', function () {
        if (dropDownMenu.classList.contains('dropdown__menu-shown')) {
            dropDownMenu.classList.remove('dropdown__menu-shown');
            dropDownToggle.classList.remove('header__link-active');
        } else {
            dropDownMenu.classList.add('dropdown__menu-shown');
            dropDownToggle.classList.add('header__link-active');
        }
    });
    window.addEventListener('click', function (event) {
        if (!dropDown.contains(event.target)) {
            dropDownMenu.classList.remove('dropdown__menu-shown');
            dropDownToggle.classList.remove('header__link-active');
        }
    });
}


