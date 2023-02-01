const express = require("express");
const router = express.Router();

const User = require("../models/usermessage");

router.post("/contact", async (req, res)=>{
    try {
        const userData = new User(req.body);
        await userData.save()
        res.status(201).json({message:"succesful"});
    } catch (error) {
       res.status(400).json({error:"error"});
        
    }
});
module.exports = router;