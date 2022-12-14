//Подключение роутов
const cardRoutes = require('express').Router();

//Импорт запросов API
const { getCards, createCard, deleteCard, likeCard, dislikeCard } = require('../controllers/cards');

//Получения карточек
cardRoutes.get('/cards', getCards);

//Создание карточки
cardRoutes.post('/cards', createCard);

//Удаление карточки
cardRoutes.delete('/cards/:cardId', deleteCard);

//Like карточки
cardRoutes.put('/cards/:cardId/likes', likeCard);

//Dislike карточки
cardRoutes.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardsRoutes;
