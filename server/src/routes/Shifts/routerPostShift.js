const {Router} = require('express')
const postShift = require('../../handlers/shift/postShift')

const routerPostShift = Router()

routerPostShift.post('/createShift',postShift)

module.exports = routerPostShift