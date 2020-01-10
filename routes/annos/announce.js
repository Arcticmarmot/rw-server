const {handleError, succeed} = require("../../utils/constant");
const anno = require('../../models/anno');

exports.getAnnounce = (req,res,next)=>{
    if(req.query.page){
        getShortAnnos(req,res,next);
    }else if(req.query.id){
        getAnnoDetail(req,res,next);
    }
};
exports.postAnnounce = (req,res,next)=>{

};
function getShortAnnos(req,res,next){
    const pageNum = req.query.page;
    anno.findShort(pageNum,(err,shortAnnos)=>{
        if(err) return handleError(next,500,'Unknown error','Unknown error');
        succeed(res, 'succeed',{shortAnnos: shortAnnos});
    });
};
function getAnnoDetail(req,res,next){
    const id = req.query.id;
    anno.findDetail(id,(err,anno)=>{
        if(err) return handleError(next,500,'Unknown error','Unknown error');
        succeed(res, 'succeed',{anno: anno});
    });
};
