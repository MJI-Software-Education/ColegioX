const mongoose = require('mongoose'); 

const dbConection =async(conexion=process.env.COLEGIO)=>{
    try {
         const con = await mongoose.connect(`${process.env.DB_CNN}/${conexion}`,{
            useCreateIndex:true,
            useFindAndModify:false,
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('DB conectada');

    } catch (error) {
        console.log('Error al levantar la base de datos',error)
    }
}

module.exports = dbConection;