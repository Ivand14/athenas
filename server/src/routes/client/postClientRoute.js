const {Router} = require('express')
const {postClientHandler} = require('../../handlers/client/postClient')

const postRouterClient = Router()

postRouterClient.post('/createClient',postClientHandler)

module.exports = postRouterClient