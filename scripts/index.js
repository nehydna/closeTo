import {userImagesArray} from './initialCards.js';
import {formValidation} from './validations.js';

const userLoaded = document.querySelector('.user-loaded');

//All popups

const popupEditProfile = document.querySelector('.popup_edit_profile');
const popupAddCard = document.querySelector('.popup_add_card');
const cardOpen = document.querySelector('.popup_card_open');


//forms, inputs

const formElement = document.querySelector('.registr')
const formEdd = document.querySelector('#form-edd');
const formEditProfile = document.querySelector('#form-edit-profile');

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


const templateCard = document.querySelector('#user-loaded-card').content


function createCard(photo, titles) {

    const messagePhoto = templateCard.querySelector('.message-photo').cloneNode(true);

    const messagePhotoPicture = messagePhoto.querySelector('.message-photo__picture');

    const messagePhotoDescription = messagePhoto.querySelector('.message-photo__description');


    const likeButton = messagePhoto.querySelector('.message-photo__like')
    likeButton.textContent = 'like';
    likeButton.addEventListener('click', toggleLikeButton)


    const trashButton = messagePhoto.querySelector('.message-photo__trash');


    trashButton.addEventListener('click', function () {
        const articleItem = trashButton.closest('.message-photo');
        articleItem.remove();
    })


    messagePhotoPicture.src = photo;
    messagePhotoPicture.alt = titles;
    messagePhotoDescription.textContent = titles;


    messagePhotoPicture.addEventListener('click', function () {
        zoomImageCard(photo, titles)
    })
    
    const buttonSubmitAddCards = formEdd.querySelector('.registr__submit_type_add');

    buttonSubmitAddCards.disabled = true;

    //    userLoaded.prepend(messagePhoto)
    return messagePhoto
}


function renderCard(photo, titles) {
    userLoaded.prepend(createCard(photo, titles))
}

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

function zoomImageCard(photo, titles) {
    openPopup(cardOpen)
    cardOpenPic.src = photo;
    cardOpenDescription.textContent = titles;
}

function saveUserName() {
    event.preventDefault()
    userName.textContent = greetingUser.textContent + ', ' + userFirstName.value;
    closePopup(popupEditProfile);
}

function toggleLikeButton(evt) {
    evt.target.classList.toggle('mesage-photo__like_active')
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
