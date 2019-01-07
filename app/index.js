const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT

app.get((req,res) => {
  res.json('welcom to api ShopShop')
})

app.use(bodyParser.json())

app.listen(port,() => {
  console.log('Listening on '+port)
})