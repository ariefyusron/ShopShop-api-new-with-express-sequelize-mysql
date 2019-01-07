const express = require('express')
const router = express.Router()

const Product = require('../controller/product')
const middleware = require('../middleware/checkAuth')

router.get('/products',Product.index)
router.post('/product',middleware,Product.store)

module.exports = router