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
