const {Router} = require('express')
const postClient = require('../routes/client/postClientRoute')
const getClient = require('./client/getRouterClient')
const routerPostShift = require('./Shifts/routerPostShift')
const getRouterShift = require('./shifts/routerGetShift')
const routerPutClient = require('../routes/client/putRouterClient')
const routerDeleteClient = require('../routes/client/deleteRouterClient')


const routes = Router()

routes.use('/',postClient)
routes.use('/',getClient)
routes.use('/',routerPostShift)
routes.use('/',getRouterShift)
routes.use('/',routerPutClient)
routes.use('/',routerDeleteClient)

module.exports = routes