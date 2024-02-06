const mongoose=require("mongoose");
const OrderSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true},
    lastname:{
            type:String,
            required:true},
    phoneno:{
        type:Number,
        required:true
    },
    email:{
                type:String,
                required:true},
    Address:{
            type:String,
            required:true},
    city:{
                type:String,
                required:true},
    state:{
        type:String,
        required:true},
    code:{
        type:Number,
        required:true
    }

});
const Order=mongoose.model("OrderData",OrderSchema);
module.exports=Order;