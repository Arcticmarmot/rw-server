const {handleError, succeed} = require("../../utils/constant");
const anno = require('../../models/anno');

exports.getPageNum = (req,res,next)=>{
    anno.findPages((err,pageNum)=>{
        if(err) return handleError(next,500,'Unknown error','Unknown error');
        succeed(res, 'succeed',{pageNum: pageNum});
    });
};
