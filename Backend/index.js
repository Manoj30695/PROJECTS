const express=require("express");
const mongoose=require("mongoose");
const Order = require("./models/Order");
const OrderModel=require("./models/Order");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://admin123:admin123@cluster0.7tv8wws.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));

app.post("/newstud",async(req,res)=>{
    const orderfirstName=req.body.orderfirstName;
    const orderlastName=req.body.orderlastName;
    const orderphoneno=req.body.orderphoneno;
    const orderemail=req.body.orderemail;
    const orderaddress=req.body.orderaddress;
    const ordercity=req.body.ordercity;
    const orderstate=req.body.orderstate;
    const ordercode=req.body.ordercode;
    const order=new OrderModel({firstname:orderfirstName,lastname:orderlastName,phoneno:orderphoneno,email:orderemail,
    Address:orderaddress,city:ordercity,state:orderstate,code:ordercode});
    try{
    await order.save();
    res.send("Inserted Values");}
 
catch(err){
    console.log(err);
}});
app.get("/display",async(req,res)=>{
    OrderModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});
    app.listen(3001,()=>console.log("Server Ready."))