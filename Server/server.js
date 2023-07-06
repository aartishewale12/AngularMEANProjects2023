const express=require('express')
const path=require('path')
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const { error } = require('console')

//connection with mongodb
mongoose.connect('mongodb://127.0.0.1:27017/Studentmanagement')
.then((x)=>{console.log(`connected to mongodb! Database name:"${x.connections[0].name}"`)})
.catch((err)=>{console.error('Error conneting to mongo',err.reason)})

//Setting of port with express js server 
const studentRoute=require('../Server/routes/student.route')
const eobj=express()//create object of express server
eobj.use(bodyParser.json())
eobj.use(bodyParser.urlencoded({extended:false}))
eobj.use(cors())
eobj.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
eobj.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
eobj.use('/api', studentRoute)

//create port
const port=3000
const server=eobj.listen(port,function(){
    console.log("server is connected to port number"+port)
})
//Find 404 and hand over to error handler
eobj.use((req,res,next)=>{next(createError(404))})

//Error Handler
eobj.use(function(err,req,res,next){
    console.error(err.message)//logs eeror message to your server console
    if(!err.statusCode)err.statusCode=500 //If the err has no specified error code ,set err code to "internal Server error(500)//
    res.status(err.statusCode).send(err.message) // All HTTP requests must have a response, so let's send back an error with its status code and message

})




