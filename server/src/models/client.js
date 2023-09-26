const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('clients',{
        id:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        phone:{
            type:DataTypes.BIGINT,
            allowNull:false
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.CHAR,
            allowNull:false
        },
        privilege:{
            type: DataTypes.STRING,
            defaultValue:'Client'
        }
    },{timestamps:false})
}