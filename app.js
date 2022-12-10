// Импортируем модули
const express = require('express');
const mongoose = require('mongoose');

// подключаемся к серверу mongo
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Создаем приложение
const app = express();

// Указываем порт для сервера
const { PORT = 3000 } = process.env;

app.get('/', (req, res) => {
  res.send('Приложение работает!');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});
