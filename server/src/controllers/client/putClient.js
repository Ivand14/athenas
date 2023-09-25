const {clients} = require('../../db')

const clientPut = async({id,name,phone}) =>{
    
    const updateClient = await clients.update(
        {name:name,phone:phone},
        {where:{id}}
    )

    if (updateClient === 0) {
        throw new Error("The id was not found or it is incorrect");
    }

    if(updateClient){
        return {
            message: 'Client update successfuly'
        }
    }else{
        return {
            message: 'Client update wrong'
        }
    }
    
}

module.exports = clientPut
