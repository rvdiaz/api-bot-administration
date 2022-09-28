const {response}=require('express');
const {Bot}=require('../models/Bot');

const getBot=async(req,res=response)=>{
    try {
        const bot=await Bot.findOne();
        if(bot)
        return res.json({
            'ok':true,
            bot:bot
        })
    } catch (error) {
        return res.status(201).json({
            'ok':false,
            error:error
        });
    }  
}

module.exports={
    getBot
}