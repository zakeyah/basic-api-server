'use strict';

module.exports=(err,req,res)=>{
  res.status(500).json({
    error:err,
    message:`sth wrong happened ${err.message}`,
    path:req.path

  });
};
