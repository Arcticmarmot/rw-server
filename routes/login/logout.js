const {succeed} = require("../../utils/constant") ;

exports.logout = (req,res,next)=>{
    res.clearCookie('token');
    succeed(res,'logout succeed',{tip:'logout succeed'});
};
