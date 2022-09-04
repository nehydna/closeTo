const settings = {
    form: '.registr',
    inputElement: '.registr__name',
    buttonElement: '.registr__submit',
    spanElementError: '.registr__name-error_active',
    inputElementError: '.registr__name_type_error',

}

const showInputError = (form, inputElement, errorMessage, settings) => {
    const formInputError =
        form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputElement.inputElementError);
    formInputError.textContent = errorMessage;
}

const hideInputError = (form, inputElement, settings) => {
    const formInputError = form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputElement.inputElementError);
    formInputError.textContent = '';
}

const checkisValid = (form, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        showInputError(form, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(form, inputElement);
    }
}


const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}

const toggleButtonAttribute = (inputElement, buttonElement, settings) => {
    if (hasInvalidInput(inputElement)) {
        buttonElement.disabled = true;
    } else {
        buttonElement.disabled = false;
    }
}


const setEventListeners = (form, settings) => {
    const inputList = Array.from(form.querySelectorAll(settings.inputElement));
    const buttonElement = form.querySelector(settings.buttonElement);
    
    toggleButtonAttribute(inputList, buttonElement, settings);
    
    inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
            checkisValid(form, inputElement, settings);
            toggleButtonAttribute(inputList, buttonElement, settings)
        })
    })
}

const enableValidationForm = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.form));
    formList.forEach(function (form) {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(form, settings);
    })
}

enableValidationForm(settings);
