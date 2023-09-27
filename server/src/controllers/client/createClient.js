const {clients} = require('../../db')


const createClientController = async({name,phone,email,password}) =>{
    
    if(!name || !phone || !email || !password ) throw new Error("Missing data")
    
    const findPhone = await clients.findOne({where:{phone}})
    if(findPhone) throw new Error("Phone already exists")
    
    
    const[createClient,created] = await clients.findOrCreate({where:{
        name,
        phone,
        email,
        password,
    }})


    return createClient

}

module.exports = createClientController