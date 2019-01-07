const express = require('express')
const router = express.Router()

const Transaction = require('../controller/transaction')

router.get('/transaction/:id',Transaction.show)
router.post('/transaction',Transaction.store)

module.exports = router