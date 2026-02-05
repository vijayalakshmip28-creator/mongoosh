const exp=require("express")
const app=exp()

const mongoose=require("mongoose")
const User=require("./usermodel")
mongoose.connect("mongodb://127.0.0.1:27017/mydharani").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})
var result=""
app.get("/showdata",(req,res)=>{
    var un=req.query["un"]
    var ag=req.query["age"]
    var ad=req.query["addr"]
    result=result + "<br>User Name:"+un+"<br>Age:"+ag+"<br>Address:"+ad

    const myinp=new User({
    sname:un,
    age:ag,
    addr:ad

})
myinp.save().then(()=>{
    console.log(result+"success")
}).catch((err)=>{
    console.log("Error:",err)
})
    res.write(result+"<h1>Successfully inserted</h1>")
    res.end()
}).listen(8901)
console.log("port listenung @ 8901..........")





