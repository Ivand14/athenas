const {Router} = require('express')
const clientDelete = require('../../handlers/client/clientDelete')

const routerDeleteClient = Router()

routerDeleteClient.delete('/deleteClient/:id',clientDelete)

module.exports = routerDeleteClient