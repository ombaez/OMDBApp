const express = require('express');
const router = express.Router();
const Favourites = require('../models/Favourites')
const Table = require('../models/Table')
const { User } = require('../models/User')

router.post('/', (req, res) => {
  console.log(req.body.movie.Title)
  console.log(req.body.userid)
  Favourites.create({ movies: req.body.movie.Title })
    .then(fav => {
      fav.addUser(req.body.userid)
      res.send(fav)
    }
    )
})

router.get('/listAll', function (req, res) {
  Favourites.findAll()
    .then(data => res.send(data))
})

module.exports = router
