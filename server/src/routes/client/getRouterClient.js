const {Router} = require('express')
const getHandlerClient = require('../../handlers/client/getHandlerClient')

const getClient = Router()


getClient.get('/clients',getHandlerClient)


module.exports = getClient