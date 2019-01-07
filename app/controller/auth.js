const models = require('../models')
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.register = (req,res) => {
  req.check('username','username is required').not().isEmpty()
  req.check('email','email is not valid').isEmail()
  req.check('password','Password min 8').isLength({min:8}).equals(req.body.confirmPassword).withMessage('Confirm password is different')

  const errors = req.validationErrors()
  if (errors){
    res.status(400).json(errors)
  }

  req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
  models.User.create(req.body)
    .then((results) => {
      res.json(results)
    }).catch((next) => {
      res.status(400).json({
        message: next.fields.email? 'email is already':'username is already'
      })
    })

}

exports.login = (req,res) => {
  res.json('login')
}

exports.logout = (req,res) => {
  res.json('logout')
}