const express = require('express')

const app = express()
const port = 3001

app.use(express.urlencoded({extended:true}))

// set up view engine 
app.set("view engine", "ejs")

// for recive and send to ejs
let plangArr = []

app.get('/',(req,res)=>{
    res.render("index",{pl:plangArr})
})

// Contact 
app.get('/contact',(req,res)=>{
    res.render("contact",{})
})

// receiving plang
app.post('/',(req,res)=>{
    const plang = req.body.plang

    // Pusing to arry
    plangArr.push(plang)
    
    res.redirect('/')
})


app.listen(port,() => console.log(`listening ${port}`))