const Cards = require('../models/card');

//Запрос получения карточки
exports.getCards = (req, res) => {
Cards.find({})
.then((card) => {
   if(card) {
      res.status(200).send({data: card})
   } else {
      res.status(400).send({message: 'Запрашиваемая карточка не найдена!')
   }
})
.catch(() => {
   res.status(500).send({message: 'Произошла ошибка!' })
})
.finally(() => {
   console.log(`req.body = ${req.body}, card = ${card}, result = ${res}`);
})
};

//Запрос создания карточки
exports.createCard = (req, res) => {
//Достаем свойства из запроса
   const owner = req.user_id;
   const {name, link} = req.body;

   Cards.create({name, link, owner})
   .then((card) => {
      Cards.find({}).populate(['owner', 'likes']);
      res.status(200).send(card);
   })
   .catch((err) => {
      if (err) {
        res.status(400).send(err.message);
      } else {
        res.status(500).send('Произошла ошибка!');
      }
    });
}

exports.deleteCard = (req, res) => {
  Cards.remove({})
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err) {
             res.status(404).send({ message: 'Карточка с указанным ID не найдена!' })
            } else {
               res.status(500).send({ message: 'Произошла ошибка!' })
            }
    });
}