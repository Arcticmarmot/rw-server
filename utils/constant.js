const createError = require('http-errors')
const PASSWORDPATTERN = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{6,20}$/;
exports.MAX_AGE = 1000*60*60*24*365*10;
exports.PAGESIZE = 4;
exports.handleError = (next,code,statusText,tip)=>{
  next(createError(code,statusText,{tip:tip}));
};

exports.succeed = (res,statusText,data)=>{
    res.writeHead(200, statusText, {
        'Content-Type': 'application/json;charset=utf8'
    });
    res.end(JSON.stringify(data));
};
function checkInArray(arr,element){
    let isIn = false;
    arr.forEach(e=>{
        if(e === element){
            isIn = true;
        }
    });
    return isIn;
}

