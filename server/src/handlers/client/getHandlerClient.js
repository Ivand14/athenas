const getClient = require('../../controllers/client/getClient')

const handlerGetClient = async(req,res) =>{
    const {name} = req.query
    try {
        const searchAllClients = await getClient(name)
        if(!searchAllClients) return res.status(404).json({error:'client not found'})
        return res.status(200).json(searchAllClients)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerGetClient