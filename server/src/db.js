require('dotenv').config()
const{DB_NAME, DB_PASSWORD, DB_HOST, DB_USER, PORT} = process.env
const {Sequelize} = require('sequelize')
const shiftsModel = require('./models/shift')
const clientModel = require('./models/client')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false, native: false},
    );

shiftsModel(sequelize)
clientModel(sequelize)

const{shifts,clients} = sequelize.models

clients.hasMany(shifts,{foreignKey:'clientId'})
shifts.belongsTo(clients)


module.exports = {
    conn: sequelize,
    shifts,
    clients
}