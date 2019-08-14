const Favourites = require('./Favourites')
const User = require('./User').User
const db = require ('../config/db')

const Table = db.define('table', {})

User.belongsToMany(Favourites, { through: Table });
Favourites.belongsToMany(User, { through: Table });

module.exports = Table