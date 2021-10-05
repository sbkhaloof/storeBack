'use strict';
module.exports=(error,req,res,next)=>{
    res.status(500).send({
        code:500,
        route:req.path,
        message:`server error: ${error.message || error}`
    });
}