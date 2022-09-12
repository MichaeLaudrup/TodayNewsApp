require('./database.js');
require('dotenv').config({path:`${__dirname}/../config.env`}); 
const express = require('express'); 
const app = express(); 

if(process.env.NODE_ENV === 'dev'){
    var cors = require('cors'); 
    app.use(cors());  
}

const path = require('path').join(__dirname, 'public')
app.use('/static', express.static(path))

/* Enrutamiento */
const newsRouter = require('./routes/news.routes'); 
app.use(express.json()); 
app.use('/api/v1/news', newsRouter); 

app.use('*', (req, res, next) => {
    next(new Error('Ruta no soportada por este servidor...'))
}) 


/* Error*/
const processErrorMiddleware = require('./middleware/error.middleware').processError
app.use(processErrorMiddleware)


/* Levantamiento de servidor */
const portNumber = process.env.PORT_NUMBER || 3000; 
const server = app.listen(portNumber, () => {
    console.log(`Nodejs server listening at port ${portNumber} in ${process.env.NODE_ENV} mode...`); 
});

