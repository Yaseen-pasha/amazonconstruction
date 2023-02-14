const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const router = require("./router/auth");
const app = express();

dotenv.config({path:"./config.env"});
require ("./db/conn");
app.use(express.json());

const port = process.env.PORT || 5000;


app.use(express.urlencoded({extended:false}));
app.use(express.static("client/build"));
app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
}) 
app.use(router);

app.listen(port, ()=>{
    console.log(`Server running at port no ${port}`);
});