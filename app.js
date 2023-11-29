const express=require ('express')
const getPost=require('./routes/post.routes.js')
const morgan = require('morgan')
const dotenv =require('dotenv')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const app =express()
dotenv.config()

//db
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{console.log("Connected DB");})
 
mongoose.connection.on('error',err=>{
    console.log(`DB Connection error: ${err.message}`);
})
//middleware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use("/", getPost)



app.listen(process.env.PORT || 4000,()=>
{
    console.log(`Api Is Listening At Port : ${process.env.PORT} `);
})