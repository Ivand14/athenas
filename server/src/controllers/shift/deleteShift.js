const {shifts} = require('../../db')

const controllerDeleteShift = async({id}) =>{
    if(!id) throw new Error('Id not found')
    const findId = await shifts.findOne({where:{id}})

    if(findId){
        await findId.destroy()
        return{
            message: 'Shift deleted successfuly'
        }
    }else{
        return{
            message: 'Could not delete shift'
        }
    }
}

module.exports = controllerDeleteShift