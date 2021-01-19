// вопрос от Андрея про document.forms vs querySelectors

// вопрос от Андрея про разницу между valid и checkValidity
// https://stackoverflow.com/questions/46263522/difference-between-checkvalidity-validity

// вопрос от Андрея про "обнуление элементов" - надо больше деталей, лучше пример

// вопрос от Димы
// Можно ли импортировать функции в файлы классов из index.js?

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

document.querySelector('.form').addEventListener('invalid', console.log)
one.addEventListener('invalid', console.log);
two.addEventListener('invalid', console.log);
three.addEventListener('invalid', console.log);

// «Целесообразно испрользовать validity.valid т.к мы просто хотим знать валидно ли значение , 
// checkValidity изменяет состояние самой формы»
// комментирует вот эту строчку: 

