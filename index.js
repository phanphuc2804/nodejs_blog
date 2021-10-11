const express = require('express')
const morgan = require('morgan')
const app = express()
const port= 3030

app.use(morgan('combined'))

app.get('/', (req, res) => {
    var a = 2
    var b = 2

    var c= a + b
    res.send('Hello world!')
})

app.listen(port, () => console.log(`App is running on port ${port}`))