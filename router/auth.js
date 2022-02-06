const express = require("express");
const router = express.Router();

const User = require("../models/usermessage");

router.post("/contact", (req, res)=>{
    const userData = new User(req.body);
    userData.save().then(()=>{
        return res.status(201).json({message:"succesful"});
    }).catch((error)=>{
        return res.status(400).json({error:"error"});
    });
});
module.exports = router;
