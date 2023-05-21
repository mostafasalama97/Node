const router = require('express').Router();




router.post('/', (req,res,next)=>{
    res.status(201).send('notes added')
})


router.get('/', (req,res,next)=>{
    res.status(200).send('Get All notes')
})


router.get('/:id', (req,res,next)=>{
    res.status(200).send('Get specific notes by using id')
})

router.patch('/:id', (req,res,next)=>{
    res.status(200).send('update specific notes by using id')
})

router.delete('/:id', (req,res,next)=>{
    res.status(200).send('delete specific notes by using id')
})

module.exports = router