require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express');
const path = require('path');
const connectDB = require('./dbConnect');
const indexRoute = require('./routes/projects')

const app = express();

// const cros = require('cors');

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cros);

app.use("/api",indexRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'public','404.html'));
});

connectDB();
const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{  
    console.log(`Server listning on ${PORT}`)
});