const express = require('express'); 

const app = express(); 
const portNumber = process.env.PORT_NUMBER || 3000; 
const server = app.listen(portNumber, () => {
    console.log(`Nodejs server listening at port ${portNumber}...`); 
})