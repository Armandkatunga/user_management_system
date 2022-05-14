const express = require('express')
const dotenv = require('dotenv/config')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()



const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`am listenning on http://localhost:${port}`)
})
