const express = require('express')

const app = express()
const port = 3000

app.use(express.urlencoded({extended:true}))

// set up view engine 
app.set("view engine", "ejs")

// for recive and send to ejs
let plangArr = []

app.get('/',(req,res)=>{
    res.render("index",{pl:plangArr})
})

// receiving plang
app.post('/',(req,res)=>{
    const plang = req.body.plang

    // Pusing to arry
    plangArr.push(plang)
    
    res.redirect('/')
})


app.listen(port,() => console.log(`listening ${port}`))