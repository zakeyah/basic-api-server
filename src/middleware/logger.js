'use strict';

module.exports=(req,res,next)=>{
  console.log(`This is Method-> ${req.method}   This is Path-> ${req.path}`);
  next();
};
