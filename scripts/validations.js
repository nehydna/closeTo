const settings = {
    form: '.registr',
    inputElement: '.registr__name',
    buttonElement: '.registr__submit',
    spanElementError: '.registr__name-error_active',
    inputElementError: '.registr__name_type_error',

}

const showInputError = (form, inputElement, errorMessage) => {
    const formInputError =
        form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('registr__name_type_error');
    formInputError.classList.add('registr__name-error_active');
    formInputError.textContent = errorMessage;
}

const hideInputError = (form, inputElement) => {
    const formInputError = form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('registr__name_type_error');
    formInputError.classList.remove('registr__name-error_active');
    formInputError.textContent = '';
}

const checkisValid = (form, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(form, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(form, inputElement);
    }
}




const setEventListeners = (form) => {
    const inputList = Array.from(form.querySelectorAll('.registr__name'));
    const buttonElement = form.querySelector('.registr__submit');
    toggleButtonAttribute(inputList, buttonElement)
    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
            checkisValid(form, inputElement);
            toggleButtonAttribute(inputList, buttonElement)
        })
    })
}


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonAttribute = (inputElement, buttonElement) => {
    if (hasInvalidInput(inputElement)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
}

const enableValidationForm = (config) => {
    const formList = Array.from(document.querySelectorAll('.registr'));
    formList.forEach(function (form) {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(form);
    })
}

enableValidationForm(settings);
