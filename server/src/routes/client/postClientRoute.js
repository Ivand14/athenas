const {Router} = require('express')
const postClient = require('../../handlers/client/postClient')

const postRouterClient = Router()

postRouterClient.post('/createClient',postClient)

module.exports = postRouterClient