const controllerDeleteShift = require('../../controllers/shift/deleteShift')

const deleteShifts = async(req,res) =>{
    const {id} = req.params
    try {
        if(!id) return res.status.json({error:'Id not found'})
        const shift = await controllerDeleteShift({id}) 
        if(!shift) return res.status.json({error:'Shift not found'})
        return res.status(200).json(shift)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = deleteShifts