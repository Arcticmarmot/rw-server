const {handleError, succeed} = require("../../utils/constant");
const {SECRET} = require('../../utils/auth');
const user = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.login = (req,res,next)=>{
    const userInfo = req.body;
    console.log(userInfo);
    user.findOne({account: userInfo.account}).then((data)=>{
       if(!data) return handleError(next,403,'login fail','Account or password is wrong');
       if(data.isLogin) return handleError(next,403,'login fail','You have already logged in other device');
       if(data.password !== userInfo.password) return handleError(next,403,'login fail','Account or password is wrong');
       let token = jwt.sign({account: data.account,role: data.role}, SECRET, {
           expiresIn: 60*60*24
       });
       res.cookie('token',token,{path:'/',maxAge:1000*60*60*24, httpOnly:false});
       return succeed(res,'login succeed',{tip:'login succeed'});
    }).catch(err=>{
       return handleError(next,500,'login fail','Unknown error');
    });
};
