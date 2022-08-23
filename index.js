const mongoose = require('mongoose');
const express = require('express')
const app = express()
const user = require('./routes/user')
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/user',user)


// const PORT = process.env.PORT || 3000;
const PORT = 5000;


app.listen(PORT,()=>{
    console.log("listening at port : ", PORT)
})



async function connectionMaking(){
        try{
            const data =  await mongoose.connect('mongodb+srv://moinkhan:faisalgym1392@cluster0.24cyrhg.mongodb.net/?retryWrites=true&w=majority')
            console.log("connected susscesfully")
        }
        catch(e){
            console.log("Not Connected")
        }
}





connectionMaking()