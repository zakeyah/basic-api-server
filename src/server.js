'use strict';

const express= require('express');
const notFound=require('./error-handlers/404');
const handlerError= require('./error-handlers/500');
const logger= require('./middleware/logger');
const clothesRouter=require('./routes/clothes');
const foodsRoutter = require('./routes/foods');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(logger);
app.use(express.json());
app.use(clothesRouter);
app.use(foodsRoutter);


app.get('/',(req,res)=>{
  res.send('servar is working');
});


function start (port){
  app.listen(port,()=>console.log(`listen to ===> ${port}`));
}
app.use('*',notFound);
app.use(handlerError);
module.exports={
  app,
  start};
