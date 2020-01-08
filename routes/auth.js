const {succeed} = require("../utils/constant") ;
const {verify} = require("../utils/auth");

exports.auth = (req,res,next)=>{
    if(verify(req)){
        return succeed(res,'authorize succeed',{auth: true});
    }else{
        return succeed(res,'authorize succeed',{auth: false});
    }
};
