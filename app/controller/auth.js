const models = require('../models')

exports.register = (req,res) => {
  res.json('register')
}

exports.login = (req,res) => {
  res.json('login')
}

exports.logout = (req,res) => {
  res.json('logout')
}