const express = require('express');
const router = express.Router();
const { User } = require('../models/User')
const passport = require('passport')
const { Table } = require('../models/Table')
const Favourites = require('../models/Favourites')

router.post('/login', passport.authenticate('local'), (req, res) => {
  const userLogData = req.user
  if (req.isAuthenticated()) {
    res.send(userLogData);
  }
})

router.get('/me', (req, res) => {
  res.send(req.user);
})

router.post('/register', (req, res) => {
  User.create({ email: req.body.email, password: req.body.password })
    .then(user => res.send(user))
})

router.get('/listAll', function (req, res) {
  User.findAll()
    .then(data => res.send(data))
})

router.post('/getfav', (req, res) => {
  User.findAll({ include: [Favourites],where: { id: req.body.id }})
  .then(data=> 
    res.send(data))
})

router.delete('/delete',(req,res)=>{
console.log(req.body)
  // User.findOne(id:)

})

// CHEQUEAR
router.post('/addfav', (req, res) => {
  console.log(req.body)
  // User.findOne({ where:{email: req.body.email}})
  //   .then(user => {
  //     console.log(user)
  //     return user.setFavourites(req.body.fav)
  //   })
  //   .then(data => {
  //     console.log(data)
  //     return res.send(data)
  //   })
  // .catch(err => console.log(err));
})

module.exports = router
