'use stict';

const express = require('express');
const router= express.Router();

const Foods = require('../models/foods');
const validator= require('../middleware/validator');

const foodsInstance= new Foods;


router.get('/food', geFoods);
router.get('/food/:id',validator, getOneFoods);
router.post('/food', createFoods);
router.put('/food/:id',validator, updateFoods);
router.delete('/food/:id',validator, deleteFoods);


function geFoods(req,res){
  let items =foodsInstance.get();
  res.status(200).json(items);
}


function getOneFoods(req,res){
  const id=parseInt(req.params.id);
  let item =foodsInstance.get(id);
  res.status(200).json(item);
}

function createFoods (req,res){
  const obj = req.body;
  const newItem= foodsInstance.create(obj);
  res.status(200).json(newItem);
}

function updateFoods(req,res){
  const id = req.params.id;
  const obj = req.body;
  const updatItem= foodsInstance.update(id,obj);
  res.status(200).json(updatItem);
}
function deleteFoods (req,res){
  const id = parseInt(req.params.id);
  const deleted=foodsInstance.delete(id);
  let msg = deleted ? 'Item is deleted':'Item was not Found'
  let statusCode = deleted ? 202 : 204;
  res.status(statusCode).json({
    msg:msg,
    deleted:deleted
  });
}
module.exports=router;
