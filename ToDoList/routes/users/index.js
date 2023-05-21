const router = require('express').Router();




router.post('/register', (req,res,next)=>{
    res.status(201).send('User Registerd')
})


router.post('/login', (req,res,next)=>{
    res.status(200).send('User Logined')
})

router.get('/', (req,res,next)=>{
    res.status(200).send('Get All User')
})


router.get('/:id', (req,res,next)=>{
    res.status(200).send('Get specific user by using id')
})

router.patch('/:id', (req,res,next)=>{
    res.status(201).send('update specific user by using id')
})

router.delete('/:id', (req,res,next)=>{
    res.status(200).send('delete specific user by using id')
})

module.exports = router