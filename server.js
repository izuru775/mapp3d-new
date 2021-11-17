require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'public','404.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`Server listning on ${PORT}`)
});