const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index')
const bcryptjs = require('bcryptjs')

const server = express()
server.name = server
server.use(cors({
    origin: '*',
    credentials: true,
    methods: 'GET, POST, OPTIONS, PUT, DELETE',
}));
server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.get('/compare',(req,res)=>{
    let hashSaved = '$2a$08$goEaCocZIuFwz8BaJPFDMOPyrZ0mxlRGObLzg0jG8cOoOgnAu8Vle'
    let compare = bcryptjs.compare('123',hashSaved)
    if(compare){
        return res.json('ok')
    }else{
        return res.json('false')
    }
})
server.use('/',routes)

module.exports = server