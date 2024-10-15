const express = require('express')
const router = require("./src/router")
const app =express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/user",router)

app.listen(port,(error)=>{  
    if(!error)
        console.log(`Server listening to http://localhostt:${port}/`)
    else
    console.log("Error ocuured! Server can't start",error)
})