require('dotenv').config()
const express = require('express')
const app = express()
const port = 4400

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/vin',(req,res)=>{
    res.send('hey i am there');
})

app.get('/chai',(req,res)=>{
    res.send('<h1> hello dear</h1>');
})
app.get('/login',(req,res)=>{
    res.send('<h3>Hare krishna to all of you!</h3>');
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
