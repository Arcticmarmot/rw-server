const {succeed} = require("../../utils/constant") ;
const {verify} = require("../../utils/auth");

exports.auth = (req,res,next)=>{
    verify(req,(err,decode)=>{
        if(err) return succeed(res,'authorize succeed',{auth: false});
        return succeed(res,'authorize succeed',{auth: true, role: decode.role});
    });
};
