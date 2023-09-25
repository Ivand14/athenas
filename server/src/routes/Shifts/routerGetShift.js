const {Router} = require('express')
const getHandlerShift = require('../../handlers/shift/getHandlerShift') 

const getShifts = Router()

getShifts.get('/shifts',getHandlerShift)

module.exports = getShifts