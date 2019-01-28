const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(4000, () => {
    console.log('app is listening on port 4000')
})


