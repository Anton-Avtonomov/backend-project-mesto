const usersRoutes = require('express').Router();

//импорт запросов API
const { getUsers, getUserById, createUser, updateAvatar, updateProfile } = require('../controllers/users');

//Получение ВСЕХ данных пользователя
usersRoutes.get('/users', getUsers);

//Получение данных ID КОНКРЕТНОГО пользователя
usersRoutes.get('/users/:userId', getUserById);

//Добавление данных НОВОГО пользователя
usersRoutes.post('/users', createUser);

//Изменения данных профиля пользователя
usersRoutes.patch('/users/:userId', updateProfile);

//Изменение аватара пользователя
usersRoutes.patch('/users/:userId/avatar', updateAvatar);

module.exports = usersRoutes;
