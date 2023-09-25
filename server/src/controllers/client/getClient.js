const { Op } = require('sequelize')
const {clients,shifts} = require('../../db')


const getClientController = async(name) =>{

    if(name){
        const clientByName = await clients.findAll(
            {where:
                {
                    [Op.iLike] : `%${name}%`
                },
                include:{
                    model:shifts,
                }
            }
            )
            return clientByName
    }else{

        const allClients = await clients.findAll({include:{
            model:shifts,
        }})
    
        return allClients
    }
    
}

module.exports = getClientController