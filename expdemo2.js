const exp=require("express")
const app=exp()
const bp=require("body-parser")
const urlencoder=bp.urlencoded({extended:false})

const mongoose=require("mongoose")
const User=require("./usermodel")
mongoose.connect("mongodb://127.0.0.1:27017/mydharani").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})
var result=""
app.post("/postdemo",urlencoder,(req,res)=>{
    var un=req.body.un
    var ag=req.body.age
    var ad=req.body.addr
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
}).listen(8902)
console.log("port listenung @ 8902..........")





