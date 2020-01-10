const {handleError, succeed} = require("../utils/constant");
const anno = require('../models/anno');


exports.getAnnounce = (req,res,next)=>{
    const pageNum = req.query.page;
    anno.findShort(pageNum,(err,shortAnnos)=>{
        if(err) return handleError(next,500,'Unknown error','Unknown error');
        anno.findPages((err,pageNum)=>{
            if(err) return handleError(next,500,'Unknown error','Unknown error');
            console.log(data);
            succeed(res, 'succeed',{shortAnnos: shortAnnos,pageNum: pageNum});
        });
    })
};
exports.postAnnounce = (req,res,next)=>{

};
