const {Router} = require('express')
const singInHandler = require('../../handlers/client/SingInHandler.js')

const routerSingInClient = Router()

routerSingInClient.get('/singIn',singInHandler)

module.exports = routerSingInClient