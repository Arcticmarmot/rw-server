const SECRET = "ahpu software & network application association";
const jwt = require('jsonwebtoken');

exports.verify = (req)=>{
    let tag = false;
    if(req.cookies && req.cookies.token){
        jwt.verify(req.cookies.token, SECRET, (err, decode)=> {
            tag = !err;
            console.log(decode);
        })
    }else{
        tag = false;
    }
    return tag;
};
exports.SECRET = SECRET;
