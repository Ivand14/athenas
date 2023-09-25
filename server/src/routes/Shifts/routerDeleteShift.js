const {Router} = require('express')
const deleteHandlerShift = require('../../handlers/shift/deleteHandlerShift') 

const deleteShifts = Router()

deleteShifts.delete('/deleteShifts/:id',deleteHandlerShift)

module.exports = deleteShifts