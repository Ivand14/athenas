const {shifts} = require('../../db')


const putControllerShift = async({id,duration,type,clientId,date}) =>{
    const findId = await shifts.update(
        {duration:duration,type:type,clientId:clientId,date:date},
        {where:{id:id}}
    )

    if(findId){
        return {
            message: 'Shift update successfuly'
        }
    }else{
        return {
            message: 'Shift update wrong'
        }
    }
        
}

module.exports = putControllerShift