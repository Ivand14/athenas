const{shifts} = require('../../db')
const {Op} = require('sequelize')

const createControllerShift = async({date,duration,type,clientId}) =>{
    
    if( !date || !duration || !type || !clientId) throw new Error('Missing Data')

    // const truncateDate = new Date(date)
    // truncateDate.setMilliseconds(0)
    
    // const findShift = await shifts.findOne({
    //     where: {
    //         date: truncateDate,
    //         duration:duration,
    //         type:type,
    //         clientId: clientId
    //     }
    // });

    // if(findShift) throw new Error("The shift has already been assigned")
    
    const [createShift,created] = await shifts.findOrCreate({where:{
        date,
        duration,
        type,
        clientId
    }})


    return createShift

}

module.exports = createControllerShift