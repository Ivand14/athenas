const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('shifts',{
        id:{
            type:DataTypes.UUID,
            allowNull: false,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        date:{
            type: DataTypes.DATE,
            allowNull:false
        },
        duration:{
            type:DataTypes.ENUM('8-10','10-12','12-14','14-16','18-20','20-22'),
            allowNull:false
        },
        type:{
            type:DataTypes.ENUM('Depilacion','Pies','Cejas'),
            allowNull:false
        },
        clientId:{
            type:DataTypes.UUID,
            allowNull:false
        }
    },{timestamps:false})
}