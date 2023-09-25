const getControllerShift = require('../../controllers/shift/getShift')

const handlerShift = async(req,res) =>{
    try {
        const getShifts = await getControllerShift()
        if(!getShifts) return res.status(404).json({error:'shifts not found'})
        return res.status(200).json(getShifts)
    } catch (error) {
        return res.status(500).json({error:error.messgae})
    }
}

module.exports = handlerShift