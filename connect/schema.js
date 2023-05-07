let data= require('mongoose');
let univserschema =new data.Schema({
    stdid:{type:Number,required:true,unique:true},
    stdname:{ype:String},
    dob:{type:String},
    marks:{type:Number}
    


});
let students= data.model("students","teachers",univserschema);
module.exports=students;
 


