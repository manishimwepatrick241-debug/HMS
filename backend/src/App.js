require('dotenv').config();
const express =require ("express");
const port=process.env.PORT;


const app=express();
app.use(express.json());

const db=require('./config/db')
app.listen (port,()=>{
  console.log(`server is running on port ${port}`);

});
module.exports=app;