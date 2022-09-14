//dependencies
const express = require('express');
//configuration
const app = express();
// get the environment variable
require('dotenv').config()

// homepage route
app.get('/', (req, res) => {
       res.send( 'welcom to our todoliste app')

   
    
})
//routes
const todolisteController = require('./controllers/todoController');
app.use('/todoliste',todolisteController )

//listen for connection
app.listen(process.env.PORT, () => {
 console.log('awake')
})