const bcryptjs = require('bcryptjs')
const createClientController = require('../../controllers/client/createClient')
const jwt = require('jsonwebtoken')
const keys = require('../../settings/key')
const express = require('express')

const check = express.Router()

check.use((req,res,next)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization']
    
    if(!token) return res.json({message:'The token is necessary for authentication'})
    
    if(token.startsWith('Bearer ')){
        token = token.slice(7,token.length)
        console.log(token)
    }

    if(token){
        jwt.verify(token,keys.key,(error,decoded)=>{
            if(error){
                return res.json({
                    message:'Token is invalid'
                })
            }else{
                req.decoded = decoded
                next()
            }
        })
    }
})




const postClientHandler = async(req,res) =>{
    const {name,phone,email,password} = req.body
    try {
        if(!name || !phone || !email || !password) return res.status(404).json({error:'Missing data'})
        let passwordHash = await bcryptjs.hash(password, 8)
        const createClient = await createClientController({name,phone,email,password:passwordHash})

        if(!createClient) return res.status(404).json({error:'Client not found'})
        
        const payload = {
            check: true
        }

        const token = jwt.sign(payload, keys.key, {
            expiresIn: '1d'
        })

        return res.json({
            message: 'Successful authentication',
            token: token,
            privilege:createClient.privilege,
            name:createClient.name
        })

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    postClientHandler,
    check
}