const {response, json}=require('express');
const {Admin}=require('../models/Admin');

const authController=async(req,res=response)=>{
    try {
        const {user,password}=req.body;
        const userLogin=await Admin.findOne();
        if(!userLogin){
            return res.status(500).json({
                'ok':false,
                sms:'This user name does not exist'
            })
        }
        if(userLogin.username!= user){
            return res.status(500).json({
                'ok':false,
                sms:'This user name is not register'
            })
        }
        if(userLogin.password!=password){
            return res.status(500).json({
                'ok':false,
                'sms':'Wrong password'
            })
        }

        return res.json({
            'ok':true,
            'sms':'login succesfully',
            user:userLogin.username
        }) 
       } catch (error) {
        res.status(201)/json({
            'ok':false,
            error:error
        })
    }
}

module.exports={
    authController
}