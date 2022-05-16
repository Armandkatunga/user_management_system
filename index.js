const express = require('express')
const dotenv = require('dotenv/config')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs")

app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))
app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/add-user',(req,res)=>{
    res.render('add-user')
})

app.listen(port,()=>{
    console.log(`am listenning on http://localhost:${port}`)
})
