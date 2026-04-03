const express = require('express')
const app = express()
const port = 3000

app.get('/search', (req, res) => {
    let query=req.query.q
    let name=req.query.name
    let location=req.query.location
    res.send(`${name}searched for ${query}from ${location}`)
    res.send('You serched for!:'+ query)
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
