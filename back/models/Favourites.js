const S = require('sequelize');
const db = require ('../config/db')


const Favourites = db.define('favourites', {
    movies: {
        type: S.STRING,
        allowNull: true,
    }
})

module.exports = Favourites