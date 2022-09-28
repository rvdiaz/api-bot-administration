const express=require('express');
const {Pregunta}=require('../models/Pregunta');
var mongoose = require('mongoose');

const GetAnswerByQuestion=async(id)=>{
    const question=await Pregunta.findById(id);
    console.log(question.idRespuesta)
}

const createQuestions=async(req, res=express.response)=>{
    try {
        const preg=new Pregunta(req.body);
        await preg.save();
        return res.json({
            'ok':true,
            'sms':'pregunta creada'
        })
    } catch (error) {
        console.log(error);
    }
}

const SearchQuestionsByForm=async(req,res=express.response)=>{
    try {
        const questions=await Pregunta.find({cuestionario:req.params.id});
        console.log(questions);
        return res.json({
            'questions':questions,
            'ok':true,
            'sms':'pregunta creada'
        })
    } catch (error) {
        console.log(error);
    }
   
}
module.exports={
    createQuestions,
    SearchQuestionsByForm
}