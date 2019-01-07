const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const validator = require('express-validator')

const port = process.env.PORT
const route = require('./routes')

app.get('',(req,res) => {
  res.json('Welcome to API ShopShop')
})
app.use(bodyParser.json())
app.use(validator())
app.use(route)

app.listen(port,() => {
  console.log('Listening on '+port)
})