let dropDowns = document.getElementsByClassName('dropdown');


for (let dropDown of dropDowns) {
    let dropDownToggle = dropDown.querySelector('.dropdown__toggle');
    // ,
    //     dropDownMenu = dropDownMenu.nextSibling;
    dropDownToggle.addEventListener('click', function () {
        let dropDownMenu = this.nextElementSibling;
        console.log(dropDownMenu);
        if (dropDownMenu.classList.contains('dropdown__menu-shown')) {
            dropDownMenu.classList.remove('dropdown__menu-shown');
            dropDownToggle.classList.remove('header__link-active');
        } else {
            dropDownMenu.classList.add('dropdown__menu-shown');
            dropDownToggle.classList.add('header__link-active');
        }
    });
}

window.addEventListener('click', function (event) {
    console.log(event.target)
    if (!dropDown.contains(event.target)) {
        dropDownMenu.classList.remove('dropdown__menu-shown');
        dropDownToggle.classList.remove('header__link-active');
    }
});
