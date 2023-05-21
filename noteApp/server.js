const express = require('express')
const cors = require('cors');
const noteRoute = require('./route/noteRoute');
var bodyParser = require('body-parser')



let app = new express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1' , noteRoute)

app.get('/', (req, res) => {
    res.send("server started successfully")
})

app.listen(3000, () => {
    console.log('server start .........')
})