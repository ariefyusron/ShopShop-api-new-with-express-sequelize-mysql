const express = require('express')
const router = express.Router()

const Product = require('../controller/product')

router.get('/products',Product.index)
router.post('/product',Product.store)

module.exports = router