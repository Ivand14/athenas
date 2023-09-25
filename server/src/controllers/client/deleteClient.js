const {clients} = require('../../db')

const controllerDeleteClient = async({id}) =>{
    if(!id) throw new Error('Id not found')

    const findId = await clients.findOne({where:{id}})
    
    if(findId){
        await findId.destroy()
        return{
            message:'Client deleted'
        }
    }else{
        return{
            message:'Error deleting client'
        }
    }
    

}

module.exports = controllerDeleteClient