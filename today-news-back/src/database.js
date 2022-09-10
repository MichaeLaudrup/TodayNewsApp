const mongoose = require('mongoose'); 

const dataBaseURL = process.env.MONGODB_URL || 'mongodb://mongodb/newsapp'; 
mongoose.connect(dataBaseURL).then( db => {
    console.log('Conexion a base de datos mongo realizada con exito al host', db.connection.host)
})