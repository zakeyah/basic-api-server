'use stict';

const express = require('express');
const router= express.Router();

const Clothes = require('../models/clothes');
const validator= require('../middleware/validator')

const clothesInstance= new Clothes;


router.get('/thing', geClothes);
router.get('/thing/:id',validator, getOneClothes);
router.post('/thing', createClothes);
router.put('/thing/:id',validator, updateClothes);
router.delete('/thing/:id',validator, deleteClothes);


function geClothes(req,res){
  let items =clothesInstance.get();
  res.status(200).json(items);
}


function getOneClothes(req,res){
  const id=parseInt(req.params.id);
  let item =clothesInstance.get(id);
  res.status(200).json(item);
}

function createClothes (req,res){
  const obj = req.body;
  const newItem= clothesInstance.create(obj);
  res.status(200).json(newItem);
}

function updateClothes(req,res){
  const id = parseInt(req.params.id);
  const obj = req.body;
  const updatItem= clothesInstance.update(id,obj);
  res.status(200).json(updatItem);
}
function deleteClothes (req,res){
  const id = parseInt(req.params.id);
  const deleted=clothesInstance.delete(id);
  let msg = deleted ? 'Item is deleted':'Item was not Found'
  let statusCode = deleted ? 202 : 204;
  res.status(statusCode).json({
    msg:msg,
    deleted:deleted
  });
}
module.exports=router;



