'use strict';

//Validation forms
function validateForm(selector) {
    Array.from(document.querySelectorAll(selector)).forEach(function (item) {
        item.addEventListener('input', function (e) {
            if (e.target.value === '') {
                item.dataset.touched = false;
            }
        });
        item.addEventListener('invalid', function () {
            item.dataset.touched = true;
        });
        item.addEventListener('blur', function () {
            if (item.value !== '')
                item.dataset.touched = true;
        });
    });
}

validateForm('.js-form .form-field');

var form = document.querySelector('.js-form');
var formName = '.js-form';

form.addEventListener('submit', function (e) {
    submitForm(e, formName);
});

function submitForm(e, formName) {
    e.preventDefault();
    var name = $(formName + ' .js-field-name').val();
    var email = $(formName + ' .js-field-email').val();
    var message = $(formName + ' .js-field-message').val();

    var formData = {
        message: message,
        email: email,
        name: name
    };

    $.ajax({
        type: "POST",
        url: 'https://www.getform.org/f/7f48bf8e-443e-47cd-b0ab-8dae10d59d03',
        data: formData,
        success: function () {
            swal("Thanks, I will contact you soon.", "", "success");
        },
        error: function (err) {
            swal("Thanks, I will contact you soon.", "", "success");
        }
    });
}
