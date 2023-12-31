const {Router} = require('express')
const postClient = require('../routes/client/postClientRoute')
const getClient = require('./client/getRouterClient')
const routerPostShift = require('./Shifts/routerPostShift')
const getRouterShift = require('./shifts/routerGetShift')
const routerPutClient = require('../routes/client/putRouterClient')
const routerDeleteClient = require('../routes/client/deleteRouterClient')
const routerPutShift = require('../routes/Shifts/routerPutShift')
const deleteHandlerShift = require('../routes/Shifts/routerDeleteShift')
const getClientToken = require('../routes/client/getClientToken')
const routerSingInClient = require('../routes/client/singInRouter')



const routes = Router()

routes.use('/',postClient)
routes.use('/',getClient)
routes.use('/',routerPostShift)
routes.use('/',getRouterShift)
routes.use('/',routerPutClient)
routes.use('/',routerDeleteClient)
routes.use('/',routerPutShift)
routes.use('/',deleteHandlerShift)
routes.use('/',getClientToken)
routes.use('/',routerSingInClient)

module.exports = routes