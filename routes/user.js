const express = require('express')
const router = express.Router()

const userModel = require('../model/userModel')


router.get('/', async (req,res)=>{

    try{
        const data   = await userModel.find()
        res.send(data)
    }
    catch(e){
        console.log("error",e)
    }
})


router.post('/', async (req,res)=>{
    const{name, email, password} = req.body;

    let errArr = []

    if(!name){
        errArr.push("user name is required")
    }
    if(!email){
        errArr.push("Email name is required")
    }
    if(!password){
        errArr.push("password name is required")
    }
    if(errArr &&  errArr.length > 0){
        res.send(errArr).status(404)
        return
    }

     let saveData =  new userModel({name,email,password})
     let returnData = await saveData.save()
     console.log(returnData)

})


router.delete('/',(req,res)=>{
})

router.put('/',(req,res)=>{
})


module.exports = router;