const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('i am god'))

app.listen(port, () => console.log('App started'))
