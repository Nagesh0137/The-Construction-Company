const express=require('express');
var app=express()
var adminroute=require('./routes/admin')
var bodyparser=require('body-parser')
var upload=require('express-fileupload');
var cors=require('cors')
app.use(upload())
app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public/'))

app.use('/admin',adminroute)

app.listen(1000)