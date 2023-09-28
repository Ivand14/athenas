const singinController = require('../../controllers/client/singInController')
const bcryptjs = require('bcryptjs')

const singInClient = async(req,res) =>{
    
    const {email,phone,password} = req.query
    
    try {
        if(!email || !phone || !password) return res.status(404).json({error:'Data missing'})
        const singin = await singinController({email,phone,password})

        if(singin){
            return res.status(200).json({
                message: 'Singin successfuly',
                singin:singin,
                login: true
            })
        }else{
            return res.status(404).json({
                error:'Client not found',
                login:false
            })
        }
            
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
}

module.exports = singInClient