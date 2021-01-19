export class Card {
    constructor(link, name, elementTemplate) {
        this._link = link;
        this._name = name;
        this._elementTemplate = elementTemplate;
    }

    // Метод возврата разметки карточки
    _getClonedTemplate() {
        return this._elementTemplate.content.cloneNode(true);
    }

    _setEventListeners() {
        const likeButton = this._element.querySelector('.element__like');
        const deleteButton = this._element.querySelector('.element__delete')
        const image = this._element.querySelector('.element__image')

        likeButton.addEventListener('click', console.log)
        deleteButton.addEventListener('click', console.log)
        image.addEventListener('click', console.log);
    }

    createCard() {
        this._element = this._getClonedTemplate();
        this._elementImage = this._element.querySelector('.element__image');
        this._elementHeading = this._element.querySelector('.element__heading');
    
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementHeading.textContent = this._name;
    
        this._setEventListeners();
    
        return this._element;
      }
}

// забираем разметку из HTML и клонируем элемент
function _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    // вернём DOM-элемент карточки
    return cardTemplate;
  }