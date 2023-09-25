const clientControllerPut = require('../../controllers/client/putClient')

const putClient = async(req,res) =>{
    
    const {id} = req.params
    const {name, phone} = req.body
    
    try {
        
        if(!id) return res.status(404).json({error:'Id required'})
        
        const client = await clientControllerPut({name,phone,id})
        if(!client) res.status(404).json({error:'We couldnt update the client'})

        return res.status(200).json(client)
    
    } catch (error) {
        
        res.status(500).json({error:error.message})
        
    }
}

module.exports = putClient