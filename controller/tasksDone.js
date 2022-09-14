const router = require('express').Router()

const tasksDone = require('../models/tasksDone')


router.get('/', (req, res) => {
    
  tasksDone.find().then(data => {
    res.json(data)
  }).catch(error => {
    res.json({meesage: error})
  })
})

router.post('/', (req, resp)=>{
  
  const tasksDone = new tasksDone({
    title: req.body.title,
    description: req.body.description
  })
  tasksDone.save().then(data => {
    resp.json(data)
  }).catch(error => {
    resp.json({message: error})
  })
})

router.delete('/:id' ,(req, res) => {
  tasksDone.deleteOne({_id: req.params.id})
  .then(data => {
    res.json(data)
  }).catch(error => {
    res.json({message: error})
  })
})


module.exports = router