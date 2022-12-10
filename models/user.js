// Подключаем базу данных MongoDB
const mongoose = require('mongoose');

// Создаю схему для пользователя(валидация)
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    menlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
  },
});

// Экспортируем модель юзера
module.exports('user', userSchema);
