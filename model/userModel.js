const express = require('express')
const app = express()
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name:  String,
    email: {
        type:String,
        requried:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
  });


const userModel = mongoose.model('users', userSchema);

// const saveData  = async  () =>{
//     const dataSave = new userModel({name:"mk",email:"moinkhan@gmail.com"});
//       const data = await dataSave.save()  
// }


module.exports = userModel;






