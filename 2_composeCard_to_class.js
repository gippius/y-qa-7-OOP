// вопрос от Димы - как переписать форму добавления карточки на ООП
// вопрос от Антонины - как связать попапы и новый класс

import { initialCards } from './const/initialCards.js';
import { Card } from './classes/Card.js'

const templateElement = document.querySelector('template');
const container = document.querySelector('.container')

// старый вариант

function composeCard({ name, link }) {
    const initialCard = templateElement.content.cloneNode(true);
    const cardName = initialCard.querySelector('.element__heading');
    const cardImage = initialCard.querySelector('.element__image');
    const cardLike = initialCard.querySelector('.element__like');
    const cardTrash = initialCard.querySelector('.element__trash');

    cardName.textContent = name;
    cardImage.src = link;

    cardLike.addEventListener('click', console.log);
    cardTrash.addEventListener('click', console.log);
    cardImage.addEventListener('click', console.log);

    return initialCard;
}

function renderCards() {
    const composedCards = initialCards.map(composeCard);
    // container.append(...composedCards)
}

// новый вариант с использованием классов

function renderCardsWithClasses() {    
    const cardClasses = initialCards.map(({ name, link }) => (new Card(name, link, templateElement)));
    const cardElements = cardClasses.map(card => (card.createCard()))
    // container.append(...cardElements);
}

// // выше все, что касается создания экземпляра карточки при помощи класса
// // хендлер добавления новой карточки

// function addNewCard(){
//     const card = new Card(linkFromInput, nameFromInput, template);
//     const cardElement = card.createCard();
//     container.append(cardElement);
//     // и закрыть попап, если карточка создавалась с него
// }