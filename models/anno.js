const mongoose = require('../init/mongoose');
const {PAGESIZE} = require("../utils/constant");
const annoSchema = mongoose.Schema(
    {
        title: String,
        content: String,
        createdAt: Date,
    }
);
annoSchema.statics.findShort = function(pageNum,cb){
    let query = this.find().select({title: 1}).sort({createdAt: -1}).skip(PAGESIZE * pageNum).limit(PAGESIZE);
    return query.exec(cb);
};
annoSchema.statics.findPages = function(cb){
    return this.find().then(data=>{
        cb(null,Math.floor(data.length/PAGESIZE)+1);
    }).catch(err=>{
        cb(err);
    })
}

const Anno = mongoose.model('annos',annoSchema);


// new Anno({title: '加拿大首都渥太华发生枪击案 致一死三伤',content:
//         '加拿大首都渥太华发生枪击案 致一死三伤',createdAt: new Date()
// }).save();
// new Anno({title: '去年12月初加拿大大选后新一届国会复会','content':
//         '去年12月初加拿大大选后新一届国会复会',createdAt: new Date()
// }).save()
// new Anno({title: '特朗普称伊核？协议各方应退出并起草新协议 外交部表态','content':
//         '特朗普称伊核？协议各方应退出并起草新协议 外交部表态',createdAt: new Date()
// }).save()
// new Anno({title: '首都渥太华发生枪击案 致一死三伤','content':
//         '首都渥太华发生枪击案 致一死三伤',createdAt: new Date()
// }).save()
// new Anno({title: '12月初加拿大大选后新一届国会复会','content':
//         '12月初加拿大大选后新一届国会复会',createdAt: new Date()
// }).save()
// new Anno({title: '协议各方应退出并起草新协议 外交部表态','content':
//         ' 协议各方应退出并起草新协议 外交部表态',createdAt: new Date()
// }).save()
// new Anno({title: '渥太华发生枪击案 致一死三伤','content':
//         '渥太华发生枪击案 致一死三伤',createdAt: new Date()
// }).save()
// new Anno({title: '加拿大大选后新一届国会复会','content':
//         '加拿大大选后新一届国会复会',createdAt: new Date()
// }).save()
// new Anno({title: '各方应退出并起草新协议 外交部表态','content':
//         ' 各方应退出并起草新协议 外交部表态',createdAt: new Date()
// }).save()
module.exports = Anno;
