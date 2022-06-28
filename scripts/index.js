//change popup

const popup = document.querySelector('.popup')
const formElement = document.querySelector('.registr')
const userFirstName = document.querySelector('#firstName')
const userLastName = document.querySelector('#lastName')
const editButton = document.querySelector('.header__menu-edit')
const closeButton = document.querySelector('.form-container__close')
const userName = document.querySelector('.header__menu-user-name')
const greetingUser = document.querySelector('.header__menu-greeting')

//change popup-add

const popupAdd = document.querySelector('.popup-add')
const addButton = document.querySelector('.user-information__submit')
const thoughtsPhoto = document.querySelector('#thoughtsPhoto')
const thoughtsDescription = document.querySelector('#thoughtsDescription')
const closeThoughtsForm = document.querySelector('#closeThoughtsForm')



//change popup

function openPopup() {
    popup.classList.add('popup_active')
}

function closePopup() {
    popup.classList.remove('popup_active')
}

function saveUserName() {
    event.preventDefault()
    userName.textContent = greetingUser.textContent + ', ' + userFirstName.value;
    closePopup();
}


//change popupAdd


function openPopupAdd() {
    popupAdd.classList.add('popup_active')
}

function closePopupAdd() {
    popupAdd.classList.remove('popup_active')
}


function getLikesActive (likeButton) {
    likeButton.forEach(items, function() {
        
    })
}



editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', saveUserName);
//formElement.addEventListener('submit', saveUserName);


addButton.addEventListener('click', openPopupAdd);
closeThoughtsForm.addEventListener('click', closePopupAdd);


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

for(let i = 0; i < userImagesArray.length; i++) {
    
      const userCards = document.createElement('article');
    userCards.classList.add('message-photo');
    
     const titleElement = document.createElement('h2');
    
    titleElement.classList.add('message-photo__description');
    
    titleElement.textContent = userImagesArray[i].name;
    
    const userImagesItem = document.createElement('img');
    
    userImagesItem.classList.add('message-photo__picture');
    
    userImagesItem.src = userImagesArray[i].link;
    userImagesItem.alt = ' ';
    
    const likeButton = document.createElement('button');
    likeButton.classList.add('message-photo__like');
    likeButton.textContent = 'like';
    
    const trashButton = document.createElement('button');
    trashButton.classList.add('message-photo__trash');
    
    userCards.append(titleElement, userImagesItem, likeButton, trashButton)
  
    
    userLoaded.append(userCards)
}



//likes

const likeButtons = document.querySelectorAll('.message-photo__like')



likeButtons.forEach (function (items) {
items.addEventListener('click', function() {
    items.classList.toggle('mesage-photo__like_active')
})
    
})


//delete cards

const deleteCardsButtons = document.querySelectorAll('.message-photo__trash');


deleteCardsButtons.forEach(function (item){
    item.addEventListener('click', function() {
    const articleItem = item.closest('.message-photo');
    articleItem.remove();
})
}
                          
                         
                         )

                          


