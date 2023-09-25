const createClientController = require('../../controllers/client/createClient')

const getClientHandler = async(req,res) =>{
    const {name,phone} = req.body
    try {
        if(!name || !phone) return res.status(404).json({error:'Missing data'})
        const createClient = await createClientController({name,phone})
        if(!createClient) return res.status(404).json({error:'Client not found'})
        return res.status(200).json(createClient)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = getClientHandler