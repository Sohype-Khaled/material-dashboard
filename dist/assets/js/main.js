/*
$('<button type="button" class="form-control__step-down">-</button><button type="button" class="form-control__step-up">+</button>').insertAfter('.form-group input[type=number]');
$('input[type=number]').parent('.form-group').each(function () {
    let field = $(this),
        input = field.find('input[type="number"]'),
        btnUp = field.find('.form-control__step-up'),
        btnDown = field.find('.form-control__step-down'),
        min = input.attr('min'),
        max = input.attr('max');
    btnUp.click(function () {
        let oldValue = parseFloat(Number(input.val()));
        let newVal;
        if (oldValue >= max) {
            newVal = oldValue;
        } else {
            newVal = oldValue + 1;
        }
        $(input).val(newVal);
        $(input).trigger("change");
    });

    btnDown.click(function () {
        let oldValue = parseFloat(Number(input.val()));
        let newVal = 0;
        if (oldValue <= min) {
            newVal = oldValue;
        } else {
            newVal = oldValue - 1;
        }
        $(input).val(newVal);
        $(input).trigger("change");
    });

});

let fileInputs = $('.file-control');
console.log(fileInputs);
fileInputs.attr('data-multiple-caption', '{count} files selected');
Array.prototype.forEach.call(fileInputs, function (input) {
    let label = fileInputs.siblings('label');
    $(input).on('change', function (e) {
        let fileName = '';
        if (this.files && this.files.length > 1)
            fileName = ($(input).attr('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
            fileName = e.target.value.split("\\").pop();
        if( fileName )
            label.text(fileName);

    })
});

$('textarea.form-control').parent('form-group').each(function () {
    let container = $(this),
        textarea = container.find('textarea.form-control');
    container.css('height', textarea.css('height'))
});*/

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

// searchToggle.addEventListener('click', function () {
//     if (searchInput.classList.contains('header__search-input-hidden')) {
//         searchInput.focus();
//         searchInput.classList.remove("header__search-input-hidden");
//     } else {
//         searchInput.blur();
//         searchInput.classList.add("header__search-input-hidden");
//     }
// });
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
