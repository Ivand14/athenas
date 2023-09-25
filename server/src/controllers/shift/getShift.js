const {shifts} = require('../../db')

const getControllerShift = async() =>{
    return await shifts.findAll()
}

module.exports = getControllerShift