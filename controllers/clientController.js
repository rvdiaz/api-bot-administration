const {response}=require('express');
const {Cliente}=require('../models/Cliente');

const SearchClient=async(tel)=>{
    let client=await Cliente.findOne({tel});
    return client;
}

const getClients=async(req,res=response)=>{
  try {
    let clients=await Cliente.find();
    if(clients){
      return res.json({
        'ok':true,
        clients:clients
      })
    }
    else
      res.json({
        'ok':false,
        'sms':'No se encuentran clientes'
      })
  } catch (error) {
    res.json({
      'ok':false,
      error:error
    })
  }
 
}

module.exports={
    SearchClient,
    getClients
}