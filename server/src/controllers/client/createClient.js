const {clients} = require('../../db')

const createClientController = async({name,phone}) =>{
    
    if(!name || !phone) throw new Error("Missing data")
    
    const findPhone = await clients.findOne({where:{phone}})
    if(findPhone) throw new Error("Phone already exists")
    
    
    const[createClient,created] = await clients.findOrCreate({where:{
        name,
        phone
    }})

    return createClient

    
    
    
    
}

module.exports = createClientController