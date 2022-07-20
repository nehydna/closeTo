//change popup profile

const popup = document.querySelector('.popup')
const formElement = document.querySelector('.registr')
const userFirstName = document.querySelector('#firstName')
const userLastName = document.querySelector('#lastName')
const editButton = document.querySelector('.header__menu-edit')
const closeButton = document.querySelector('.form-container__close')
const userName = document.querySelector('.header__menu-user-name')
const greetingUser = document.querySelector('.header__menu-greeting')
const popupEditProfile = document.querySelector('.popup_edit_profile')

//change popup-add


const addButton = document.querySelector('.user-information__submit')
const thoughtsPhoto = document.querySelector('#thoughtsPhoto')
const thoughtsDescription = document.querySelector('#thoughtsDescription')
const closeThoughtsForm = document.querySelector('#closeThoughtsForm')
const popupAddCard = document.querySelector('.popup_add_card')
const registrButtonAddSubmit = document.querySelector('.registr__submit')


//change popup

function openPopupProfileEditor() {
    popupEditProfile.classList.add('popup_active')
}

function closePopup() {
    popupEditProfile.classList.remove('popup_active')
}

function saveUserName() {
    event.preventDefault()
    userName.textContent = greetingUser.textContent + ', ' + userFirstName.value;
    closePopup();
}


//change popupAdd


function openPopupAdd() {
    popupAddCard.classList.add('popup_active')
}

function closePopupAdd() {
    popupAddCard.classList.remove('popup_active')
}


function getLikesActive(likeButton) {
    likeButton.forEach(items, function () {

    })
}



editButton.addEventListener('click', openPopupProfileEditor);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', saveUserName);



addButton.addEventListener('click', openPopupAdd);
closeThoughtsForm.addEventListener('click', closePopupAdd);

const userThoughtsDescription = document.querySelector('.user-thoughts__descriptio');
const userThoughtsPic = document.querySelector('.user-thoughts__pic')


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


const userLoadeds = document.querySelector('.user-loadeds');

for (let i = 0; i < userImagesArray.length; i++) {

  

    const userLoadedTemplate = document.querySelector('#user-loaded').content.cloneNode(true);
    
    const userLoaded = userLoadedTemplate.querySelector('.message-photo');
    
    const messagePhoto = userLoadedTemplate.querySelector('.message-photo');
    
    userLoadedTemplate.querySelector('.message-photo__description').textContent = userImagesArray[i].name;
    
     userLoadedTemplate.querySelector('.message-photo__picture').src = userImagesArray[i].link;
    
    const likeButton = userLoadedTemplate.querySelector('.message-photo__like') 
     likeButton.textContent = 'like';
    
     const trashButton = userLoadedTemplate.querySelector('.message-photo__trash');

    userLoadeds.append(userLoaded)

}

//function addThoughtsPictureDescription () {
//    evt.preventDefault;
//    userImagesArray.name = userThoughtsDescription.value;
//    userImagesArray.link = userThoughtsPic.src;   userImagesArray.append( userImagesArray.name, userImagesArray.link);
//      closePopup();
//}

//registrButtonAddSubmit.addEventListener('click', function() {
//    
//});

//likes

const likeButtons = document.querySelectorAll('.message-photo__like')



likeButtons.forEach(function (items) {
    items.addEventListener('click', function () {
        items.classList.toggle('mesage-photo__like_active')
    })

})


//delete cards

const deleteCardsButtons = document.querySelectorAll('.message-photo__trash');


deleteCardsButtons.forEach(function (item) {
        item.addEventListener('click', function () {
            const articleItem = item.closest('.message-photo');
            articleItem.remove();
        })
    }


)
