import {userImagesArray} from './scripts/initialCards.js';
import {formValidation} from './scripts/validations.js';
import {templateCard, userLoaded, renderCard, toggleLikeButton} from './scripts/card.js';
import './styles/index.css'; 


//All popups

const popupEditProfile = document.querySelector('.popup_edit_profile');
const popupAddCard = document.querySelector('.popup_add_card');
const cardOpen = document.querySelector('.popup_card_open');


//forms, inputs

const formElement = document.querySelector('.registr')

const formEditProfile = document.querySelector('#form-edit-profile');
const formEdd = document.querySelector('#form-edd');
const formInput = document.querySelector('.registr__name');

//form add card inputs

const thoughtsPhoto = document.querySelector('#thoughtsPhoto');
const thoughtsDescription = document.querySelector('#thoughtsDescription');

//buttons

const buttonCardEdit = document.querySelector('.header__menu-edit');
const buttonAddCard = document.querySelector('.user-information__submit');



const buttonsClosePopup = Array.from(document.querySelectorAll('.form-container__close'));


//zoom inputs

const cardOpenDescription = document.querySelector('.form-container__card-description');
const cardOpenPic = document.querySelector('.form-container__card-pic');

//profile edit inputs

const userFirstName = document.querySelector('#firstName');
const userLastName = document.querySelector('#lastName');

//
//profile variables
const userName = document.querySelector('.header__menu-user-name');
const greetingUser = document.querySelector('.header__menu-greeting');





userImagesArray.forEach(function (items) {
    renderCard(items.link, items.name)

})


function openPopup(popup) {
    popup.classList.add('popup_active');
}

function closePopup(popup) {
    popup.classList.remove('popup_active')
}



function handleAddCard() {
    event.preventDefault()
    renderCard(thoughtsPhoto.value, thoughtsDescription.value)
    closePopup(popupAddCard)
    formEdd.reset();
}

export function zoomImageCard(photo, titles) {
    openPopup(cardOpen)
    cardOpenPic.src = photo;
    cardOpenDescription.textContent = titles;
}

function saveUserName() {
    event.preventDefault()
    userName.textContent = greetingUser.textContent + ', ' + userFirstName.value;
    closePopup(popupEditProfile);
}



//listeners

formEdd.addEventListener('submit', handleAddCard);

buttonCardEdit.addEventListener('click', function () {
    openPopup(popupEditProfile)

});


formEditProfile.addEventListener('submit', saveUserName);

buttonAddCard.addEventListener('click', function () {
    openPopup(popupAddCard);

});


buttonsClosePopup.forEach(function (button) {
    button.addEventListener('click', function () {
        const popupItem = button.closest('.popup');
        closePopup(popupItem)

    })
})


const popups = Array.from(document.querySelectorAll('.popup'));

popups.forEach(function (item) {
    item.addEventListener('click', function (evt) {
        if (evt.target == item) {
            closePopup(item)
        }
    })
})
