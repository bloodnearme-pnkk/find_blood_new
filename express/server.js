const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = express();
const port = 3001;
const cors = require("cors")



const connectdb = async()=>{
    try{
        const  connect = await mongoose.connect('mongodb+srv://schotaliya198:Sejal%40198@cluster0.u2tbldx.mongodb.net/?retryWrites=true&w=majority');
        console.log("database connected",connect.connection.host,connect.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
connectdb();

// define user schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:String,
    bloodgroup:String
  });

  const User = mongoose.model('User', userSchema);
  app.use(bodyParser.json());
  app.use(cors())
  app.post('/api/register', (req, res) => {
    const {username,email,password,bloodgroup} = req.body;
   
    
    //HashPassword
    const user =  User.create({username,email,password,bloodgroup}); 
    
    
    res.status(200).json({success:1,error:0,msg:`User Created Succesfully with id ${user.id} `});
    });


    app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    
    const user =   User.findOne({username});
    if(user)
    {
       
            res.status(200).json({success:1,error:0,token:"Secret"});
       
    }
    else{
        
        console.log("tes2");
        res.status(401).json({success:0,error:1,msg:"invalid credentials"});
    }

    res.status(200).json({success:1,error:0,msg:"login"});
  });  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
