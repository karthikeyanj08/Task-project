let connect= require('express');
let app = connect();
let mango = require('mongoose')
let univserschema=require('./schema');
const express = require('express');
app.use(express.json());

app.listen('4000',()=>{console.log("server is running");})

mango.connect('mongodb+srv://karthikeyanj:Karthick%4008@cluster0.lticywd.mongodb.net/organization')
.then(()=>{console.log("connected to mongodb");})
.catch(()=>{console.log("error");})

app.post('/addstudent',(request,response)=>{
    try{
        let newstudent=new univserschema(request.body)
        newstudent.save();
        response.status(200).json(newstudent);
    }
    catch(error){
        response.status(400).send(error)

    }
})
app.get('/viewstu',(request,response)=>{
    try{
       let view = univserschema.find({});
       response.sendStatus(200).send(view);

    }
    catch(error){
       response.sendStatus(400).send(error);
    }
})
