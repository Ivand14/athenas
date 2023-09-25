const putControllerShift = require('../../controllers/shift/putShift')

const handlerPutShift = async(req,res) =>{
    const {id} = req.params
    const {date,duration,type,clientId} = req.body
    try {
        if(!id || !duration|| !type || !clientId || !date) return res.status(404).json({error:'Missing Data'})
        const shift = await putControllerShift({id,duration,type,clientId,date})
        if (!shift) return res.status(404).json({error:'Shift not found'})
        return res.status(200).json(shift)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerPutShift