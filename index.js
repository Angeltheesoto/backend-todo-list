

const express = require('express');
//initialize the app object
const app = express();
// get the environment variable
require('dotenv').config()

// homepage route
app.get('/', (req, res) => {
       res.send( 'welcom to our todoliste app')

   
    
})
//wild card route
app.get('*', (req, res) => {
   res.status(404).send(`<div style='
                background-color: blue;
                height: 50%;
                width: 50%;
                border-radius: 10px;
                margin-left: 25%;
                margin-top: 25%;
                ' >
                <div 
                style=' color: white;
                text-align: center;
                
                ' >
                  <h1>404</h1>
                  <h2>Page Not Found</h2>
                  <h3>this page doesn't exist </h3>
                  <button style='hover: {background-color:green}; padding: 1em; background-color: white; border-radius: 10px;'> Go Back To Home Page </button>
                </div>
                
              </div>
              
              `
              
              )
})

//listen for connection
app.listen(process.env.PORT, () => {
 console.log('awake')
})