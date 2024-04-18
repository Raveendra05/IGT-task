const express = require('express')
// const ejs = require('ejs')
const bodyParser = require('body-parser')
const path = require('path')
const templateRoute = require('./routes/templateRoute')
const PORT =3000
const app = express()

//static files
app.use(express.static('public'))
app.use('/css' , express.static(__dirname + 'public/css'))
app.use('/images' , express.static(__dirname + 'public/images'))

app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))
app.use(express.json())
app.use('/' , templateRoute)
app.listen(PORT , ()=>{
    console.log(`we are at the port ${PORT}`);
})