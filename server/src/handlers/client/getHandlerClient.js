const getClient = require('../../controllers/client/getClient')

const handlerGetClient = async(req,res) =>{

    const {name} = req.query
    console.log(name)
    
    try {
        if(!getClient) return res.status(404).json({error:'client not found'})
        
        if(name){
            const searchByName = await getClient(name)
            return res.status(200).json(searchByName)
        }
        
        const searchAllClients = await getClient()
        return res.status(200).json(searchAllClients)

        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = handlerGetClient