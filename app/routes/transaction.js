const express = require('express')
const router = express.Router()

const Transaction = require('../controller/transaction')
const middleware = require('../middleware/checkAuth')

router.get('/transaction/:id',middleware,Transaction.show)
router.post('/transaction',middleware,Transaction.store)

module.exports = router