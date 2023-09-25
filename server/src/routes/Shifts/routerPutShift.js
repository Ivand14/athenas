const {Router} = require('express')
const putShift = require('../../handlers/shift/putHandlerShift')

const routerPutShift = Router()

routerPutShift.put('/putShift/:id',putShift)

module.exports = routerPutShift