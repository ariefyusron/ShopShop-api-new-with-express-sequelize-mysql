const express = require('express')
const router = express.Router()

const Order = require('../controller/order')

router.get('/orders',Order.index)
router.post('/order',Order.store)
router.patch('/order/:id',Order.update)
router.delete('/order/:id',Order.delete)

module.exports = router