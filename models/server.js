const express= require('express')
const cookieParser= require('cookie-parser');
const cors= require('cors');
const bodyParser= require('body-parser')
const {dbConnection}= require('../database/config');


class Server{
constructor(){
    this.app=express()
    this.port=process.env.PORT
    this.usuarioPath='/api/usuario'
    this.conectarDB()
}


listen(){
    this.app.listen(this.port, ()=>{
        console.log(`Escuchando por el puerto ${this.port}`)
    })
}
   async conectarDB(){
        await dbConnection()
    }
}


module.exports= Server

