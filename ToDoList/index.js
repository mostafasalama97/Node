const express = require('express');
var bodyParser = require('body-parser');
const { userRouter, todoRouter } = require('./routes');

const app = new express();

// app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/users' , userRouter)
app.use('/todos' , todoRouter)

app.all('*',(req,res,next)=>{
    res.status(404).send('Page Not Found')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })




app.listen(3000, (req,res,next)=>{
    console.log('app is listning on port 3000')
})