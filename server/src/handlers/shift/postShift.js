const createControllerShift = require('../../controllers/shift/createShift')

const createShift = async(req,res) =>{
    const{date,duration,type,clientId} = req.body
    try {
        if( !date || !duration || !type || !clientId) return res.status(404).json({error:'Missing data'})
        const createShiftController = await createControllerShift({date,duration,type,clientId})
        if(!createShiftController) return res.status(404).json({error:'Shift not found'})
        return res.status(200).json(createShiftController)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = createShift