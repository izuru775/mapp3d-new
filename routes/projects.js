const VR = require('../models/3dmodel');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    VR.find({}).
        then(result=>{
            if(result){
                res.json({statusCode:200,data:result})
            }else{
                res.json({statusCode:400,message:err})
            }
        })
        .catch(err=>console.log(err))
})

router.post('/',(req,res)=>{
    let {environmentName,environmentCreator,vrObject} = req.body;
    console.log(req.body);
    if(req.body){
        const newVR = new VR({
            environmentName,
            environmentCreator,
            vrObject
        })
        newVR.save()
        .then(result =>{
            if(result){
                res.json({statusCode:200,message:"object successfully added", data:result})
            }else{
                res.json({statusCode:400,message:err})
            }
        })
        .catch(err=>console.log(err));
    }
    
    
});

router.get('/home',(req,res)=>{
    res.render('index',{title:"Home"})
})

router.get('/environments',(req,res)=>{
    res.render('environments',{title:'Environments'})
})

module.exports = router;