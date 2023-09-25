const {Router} = require('express')
const putHandlerClient = require('../../handlers/client/putHandlerClient')

const routerPutClient = Router()

routerPutClient.put('/putClient/:id',putHandlerClient)

module.exports = routerPutClient