
const { clients } = require('../../db');
const bcrypt = require('bcryptjs');

const singinController = async ({ email, phone, password }) => {
    if (!email || !phone || !password) {
        throw new Error('Data missing');
    }

    const findUser = await clients.findOne({
        where: {
            email: email,
            phone: phone,
        }
    });


    if (findUser) {
        console.log(findUser.dataValues.password)
        console.log(password)
        const match = await bcrypt.compare(password.trim(),findUser.dataValues.password.trim())
        console.log(match)
        if (match) {
            return findUser;
        }else{
            throw new Error({
                message:'Invalid credentials',
                login:false
            });
        }
    }

    return findUser

}

module.exports = singinController;


