
let dropDownToggles = document.getElementsByClassName('dropdown__toggle');

for (let dropDownToggle of dropDownToggles) {
    dropDownToggle.addEventListener('click', function (event) {
        let dropDownMenu = this.nextElementSibling;
        if (dropDownMenu.classList.contains('dropdown__menu-shown')) {
            dropDownMenu.classList.remove('dropdown__menu-shown');
        } else {
            dropDownMenu.classList.add('dropdown__menu-shown');
        }
    });
}

window.addEventListener('click', function (event) {
    console.log(event.target)
    if (!event.target.classList.contains('dropdown__toggle') &&
        !event.target.classList.contains('dropdown__menu') &&
        !event.target.classList.contains('dropdown__menu-item') &&
        !event.target.classList.contains('dropdown__menu-link') &&
        !event.target.classList.contains('dropdown__menu-separator')
    ) {
        let menus = document.getElementsByClassName('dropdown__menu');
        for (let menu of menus) {
            menu.classList.remove('dropdown__menu-shown');
        }
    }
});

