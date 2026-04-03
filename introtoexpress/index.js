const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('This is a get   request')
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('This is a post request')
})

app.put('/', (req, res) => {
    res.send('This is a put request')
})
app.delete('/', (req, res) => {
    res.send('This is a delete request')
})
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})


