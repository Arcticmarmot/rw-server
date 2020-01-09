const {findShort}  = require("../utils/db-auxi");
const {handleError, succeed} = require("../utils/constant");
const anno = require('../models/anno');


exports.getAnnounce = (req,res,next)=>{
    const pageNum = req.query.page;
    findShort(anno,pageNum,(err,data)=>{
        if(err) return handleError(next,500,'Unknown error','Unknown error');
        console.log(data);
        succeed(res, 'succeed',data);
    })
};
exports.postAnnounce = (req,res,next)=>{

};
