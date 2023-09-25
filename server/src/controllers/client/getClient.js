const { Op } = require('sequelize')
const {clients,shifts} = require('../../db')


const getClientController = async(name) =>{

    if(!name) return await clients.findAll({include:{
        model:shifts,
    }})


    if(name){
        const clientByName = await clients.findAll(
            {where:{
                name:{
                    [Op.iLike] : `%${name}%`,
                },
            },
            include:{
                model:shifts,
            }
            }
            )
            return clientByName
    }
    
}

module.exports = getClientController