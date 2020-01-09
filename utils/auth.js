const SECRET = "ahpu software & network application association";
const jwt = require('jsonwebtoken');

exports.verify = (req,cb)=>{
    if(req.cookies && req.cookies.token){
        jwt.verify(req.cookies.token, SECRET, (err, decode)=> {
            cb(err,decode);
        })
    }else{
        cb(new Error());
    }
};
exports.SECRET = SECRET;
