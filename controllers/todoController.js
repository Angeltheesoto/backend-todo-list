const router = require('express').Router()
const tasksDone = require('../models/tasksDone')
const Todo = require('../models/Todo')

router.get('/done', (req, res) => {
  tasksDone.find().then(data => {
    res.json(data)
   }).catch(error => {
     res.json({meesage: error})
   })
})

router.post('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {
  Todo.updateOne({_id: req.params.id}, {
    $set: {
        done: true
    }
  })
})

router.delete('/:id', (req, res) => {

})

//wild card route
router.get('*', (req, res) => {
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
module.exports = router