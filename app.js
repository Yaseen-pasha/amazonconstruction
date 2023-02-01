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

const staticPath = path.join(__dirname, './client/build');
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticPath));
app.use(router);

app.listen(port, ()=>{
    console.log(`Server running at port no ${port}`);
});