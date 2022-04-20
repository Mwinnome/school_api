const User = require("../models/userSchema")
const bcrypt =require("bcrypt")


//add a user
const addUser = async(req, res)=>{

   //hashing password with bcrypt
   const salt = await bcrypt.gensalt(10)
   const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword
    })
await newUser.save();
res.status(201).json({
    _id: newUser._id,
    username:newUser.username,
    email:newUser.email
});
}

module.exports= {addUser}