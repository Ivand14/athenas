const {Router} = require('express')
const {check} = require('../../handlers/client/postClient')

const checkRouter = Router()

checkRouter.get('/tokenClient',check)

module.exports = checkRouter