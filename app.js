/* eslint-disable import/no-extraneous-dependencies */
// Импортируем модули
const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

// Указываем порт для сервера и базы данных
const {
  PORT = 3000,
  MONGO_URL = 'mongodb://localhost:27017/mestodb',
} = process.env;
// Создаем приложение
const app = express();

// Подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb');

// // Добавляем в каждый запрос объект user с полем _id
app.use((req, res, next) => {
  req.user = {
    _id: '5d8b8592978f8bd833ca8133', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

// Марштуризация
app.use('/', usersRoutes);
app.use('/', cardsRoutes);
app.get('*', (req, res) => {
  res.send('Приложение работает!');
  console.log('Получен запрос');
});


async function connectServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log('Connected to db');

  await app.listen(PORT, () => {
    console.log(`Сервер запущен на порту: ${PORT}, в ${new Date}`);
  });
}

connectServer();