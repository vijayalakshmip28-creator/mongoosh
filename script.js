const mongoose=require("mongoose")
const User=require("./usermodel")
mongoose.connect("mongodb://127.0.0.1:27017/myviji").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})

const myinp=new User({
    sname:"Bharani",
    age:19,
    addr:"204,punavasipatti"

})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log("Error:",err)
})