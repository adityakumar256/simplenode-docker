const express=require("express");
const app=express();



app.get("/",()=>{
  console.log("hello from Docker");
})
app.listen(5060,()=>{
  console.log("server connected at port of 5060");
});