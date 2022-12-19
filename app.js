// Импортируем модули
const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

// Создаем приложение
const app = express();

// Подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mestodb');

// // Добавляем в каждый запрос объект user с полем _id
// app.use((req, res, next) => {
//   req.user = {
//     _id: '5d8b8592978f8bd833ca8133', // вставьте сюда _id созданного в предыдущем пункте пользователя
//   };

//   next();
// });

// Марштуризация
app.use('/', usersRoutes);
app.use('/', cardsRoutes);

// Указываем порт для сервера
const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
  res.send('Приложение работает!');
  console.log('Получен запрос get');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}, в ${new Date}`);
});
