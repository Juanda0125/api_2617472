const mongoose= require('mongoose')

const dbConnection = async()=>{
    try{
        mongoose.connect(process.env.MONGO_CNN)
        console.log('Conexion exitosa a la base de datos mongo')
    }
    catch(error){
        console.log(error)
    }
}

module.exports= {dbConnection}
