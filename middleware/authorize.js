const {verify} = require("../utils/auth");
const {handleError} = require("../utils/constant") ;
const aclInit = require('../init/acl-init');
const mongoose = require('../init/mongoose');

module.exports = (req,res,next)=>{
    verify(req,(err,decode)=>{
        if(err) return handleError(next,500,'Unknown error','Unknown error');
        const acl = aclInit(mongoose.connection.db);
        permissionCheck(req,acl,decode.role,(err,permission)=>{
            if(err) return handleError(next,500,'Unknown error','Unknown error');
            if(!permission) return handleError(next,401,'no permission','no permission');
            return next();
        });
    });
};

function permissionCheck(req,acl,role,cb){
    const resource = req.route.path;
    const method = req.method.toLowerCase();
    acl.areAnyRolesAllowed(role,resource,method).then((permission)=>{
        cb(null,permission);
    }).catch(err=>{
        cb(err);
    })
}
