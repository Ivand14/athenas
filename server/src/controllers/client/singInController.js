
const { clients } = require('../../db');
const bcrypt = require('bcryptjs');

const singinController = async ({ email, password }) => {
    if (!email ||  !password) {
        throw new Error('Data missing');
    }

    const findUser = await clients.findOne({
        where: {
            email: email,
        }
    });


    if (findUser) {
        const match = await bcrypt.compare(password.trim(),findUser.dataValues.password.trim())
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


