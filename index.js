const express = require('express')
const app = express()
const port= 3030

app.get('/', (req, res) => {
    var a = 2
    var b = 2

    var c= a + b
    res.send('Hello world!')
})

app.listen(port, () => console.log(`App is running on port ${port}`))