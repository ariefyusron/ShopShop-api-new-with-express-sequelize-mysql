const models = require('../models')

exports.store = (req,res) => {
  models.Transaction.create(req.body)
    .then((results) => {
      res.json(results)
    }).catch((next) => {
      res.status(500).json({
        field: next.errors[0].path,
        message: next.errors[0].message
      })
    })
}

exports.show = (req,res) => {
  models.Transaction.findAll({
    where:{
      id: req.params.id
    },
    include: [{
      model: models.Order,
      include: [
        models.Product
      ]
    }]
  })
    .then((results) => {
      res.json(results)
    })
}