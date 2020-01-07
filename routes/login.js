const {handleError, succeed} = require("../utils/constant") ;
const user = require('../models/user');

exports.login = (req,res,next)=>{
    const userInfo = req.body;
    console.log(userInfo);
    user.find_by_account_login(userInfo.account,(err,data)=>{
        if(err) return handleError(next,500,'login fail','Unknown error');
        if(data){
            if(data.isLogin){
                return handleError(next,403,'login fail','You have already logged in other device');
            }else{
                if(data.password === userInfo.password){
                    return succeed(res,'login succeed',{tip:'login succeed'});
                }else{
                    return handleError(next,403,'login fail','Account or password is wrong');
                }
            }
        }else{
            return handleError(next,403,'login fail','Account or password is wrong');
        }
    });
};
