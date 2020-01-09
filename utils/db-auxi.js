const {PAGESIZE} = require("../utils/constant");
exports.findShort = (model,pageNum,cb)=>{
    let query = model.find().select({title: 1}).sort({createDate: -1}).skip(PAGESIZE * pageNum).limit(PAGESIZE);
    query.exec(cb);
};
