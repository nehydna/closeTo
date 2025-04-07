
import {zoomImageCard} from '../index.js'

export const templateCard = document.querySelector('#user-loaded-card').content;
export const userLoaded = document.querySelector('.user-loaded');


function createCard(photo, titles) {

    const messagePhoto = templateCard.querySelector('.message-photo').cloneNode(true);

    const messagePhotoPicture = messagePhoto.querySelector('.message-photo__picture');

    const messagePhotoDescription = messagePhoto.querySelector('.message-photo__description');
    const formEdd = document.querySelector('#form-edd');

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


export function renderCard(photo, titles) {
    userLoaded.prepend(createCard(photo, titles))
}

export function toggleLikeButton(evt) {
    evt.target.classList.toggle('mesage-photo__like_active')
}
