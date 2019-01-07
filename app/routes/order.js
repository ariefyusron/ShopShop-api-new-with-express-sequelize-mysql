const express = require('express')
const router = express.Router()

const Order = require('../controller/order')
const middleware = require('../middleware/checkAuth')

router.get('/orders',middleware,Order.index)
router.post('/order',middleware,Order.store)
router.patch('/order/:id',middleware,Order.update)
router.delete('/order/:id',middleware,Order.delete)

module.exports = router