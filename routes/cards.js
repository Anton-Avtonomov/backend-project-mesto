// Подключение роутов
const cardRoutes = require('express').Router();

// Импорт запросов API
const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

// Маршрут получения карточек
cardRoutes.get('/cards', getCards);

// Маршрут создания карточки
cardRoutes.post('/cards', createCard);

// Маршрут удаления карточки
cardRoutes.delete('/cards/:cardId', deleteCard);

// Маршрут Like карточки
cardRoutes.put('/cards/:cardId/likes', likeCard);

// Маршрут Dislike карточки
cardRoutes.delete('/cards/:cardId/likes', dislikeCard);

module.exports = cardRoutes;
