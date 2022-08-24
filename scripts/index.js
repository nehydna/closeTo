//images array

const userImagesArray = [
    {
        name: 'pouchofhappy',
        link: './images/5009.jpg'
    },
    {
        name: 'werecat',
        link: './images/260941-werecat.jpg'
    },
    {
        name: 'fonstola',
        link: './images/fonstola.ru-100651.jpg'
    },
    {
        name: 's1200',
        link: './images/s1200.jpg'
    },
    {
        name: 'maxresdefault',
        link: './images/maxresdefault.jpg'
    },
    {
        name: 'volshebnogo',
        link: './images/volshebnogo_dnja_rojdenija.jpg'
    }
];


const userLoaded = document.querySelector('.user-loaded');

//All popups

const popupEditProfile = document.querySelector('.popup_edit_profile');
const popupAddCard = document.querySelector('.popup_add_card');
const cardOpen = document.querySelector('.popup_card_open');

//buttons

const buttonCardEdit = document.querySelector('.header__menu-edit');
const buttonAddCard = document.querySelector('.user-information__submit');
const buttonClosePopupEditProfile = document.querySelector('.form-container__close');
const buttonCloseThoughtsForm = document.querySelector('#closeThoughtsForm');
const buttonCardClose = document.querySelector('#card-close');


//forms, inputs

const formEdd = document.querySelector('#form-edd');
const formElement = document.querySelector('.registr')

//form add card inputs

const thoughtsPhoto = document.querySelector('#thoughtsPhoto');
const thoughtsDescription = document.querySelector('#thoughtsDescription');

//zoom inputs

const cardOpenDescription = document.querySelector('.zoom-container__card-description');
const cardOpenPic = document.querySelector('.zoom-container__card-pic');

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

    //    userLoaded.prepend(messagePhoto)
    return messagePhoto
}


function renderCard(photo, titles) {
    userLoaded.prepend(createCard(photo, titles))
}

userImagesArray.forEach(function (items) {
    renderCard(items.link, items.name)

})

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

function openPopup(popup) {
    popup.classList.add('popup_active')
}

function closePopup(popup) {
    popup.classList.remove('popup_active')
}



//listeners

formEdd.addEventListener('submit', handleAddCard);

buttonCardEdit.addEventListener('click', function () {
    openPopup(popupEditProfile)

});

buttonClosePopupEditProfile.addEventListener('click', function () {
    closePopup(popupEditProfile)
});

formElement.addEventListener('submit', saveUserName);

buttonAddCard.addEventListener('click', function () {
    openPopup(popupAddCard)

});;

buttonCloseThoughtsForm.addEventListener('click', function () {
    closePopup(popupAddCard)
})

buttonCardClose.addEventListener('click', function () {
    closePopup(cardOpen)
})
