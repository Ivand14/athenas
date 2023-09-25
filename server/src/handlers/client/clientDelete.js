const controllerDeleteClient = require('../../controllers/client/deleteClient')

const deleteHandlerClient = async(req,res) =>{

    const {id} = req.params
    
    try {
        if(!id) return res.status(404).json({error:'Id not found'})
        const deleteClient = await controllerDeleteClient({id})
        if(!deleteClient) return res.status(404).json({error:'Error deleting client'})

        return res.status(200).json(deleteClient)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = deleteHandlerClient