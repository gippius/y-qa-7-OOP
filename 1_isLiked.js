class Card {
    // свойство, обозначенное приватным
    // _isLiked
    // приватное свойство
    // #isLiked;

    constructor({ isLiked }) {
        // console.log(`Создаем экземпляр класса, входные параметры для конструктора:`)
        // console.log(argument)
        // в момент создания экземпляра класса создается свойство с нужным значением
        this.isLiked = isLiked;
    }

    toggleLike() {
        // метод обращается к свойству класса и меняет его
        this.isLiked = !this.isLiked;
        console.log(this)
    }
}

var sampleCard = new Card({ isLiked: false });

// вопрос от Ильи про то, как работает основная схема сверху
console.log(sampleCard);

/* отрицание */

// var bool = true;
// bool = !bool;
// console.log(bool)

// 2 вопроса от анонима
// почему бы просто не создавать переменную _element?
// почему методы и функции вызываются через this?

// вопрос от Арины
// как работает система с приватным методом, который ведет на приватное свойство
// приватные свойства - два варианта обозначения
// тыкаем вариант без приватности
// меняем класс на приватный, тыкаем еще раз