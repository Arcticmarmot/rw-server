const mongoose = require('../init/mongoose');

const annoSchema = mongoose.Schema(
    {
        title: String,
        content: String,
    }
);

const Anno = mongoose.model('annos',annoSchema);


// new Anno({title: '加拿大首都渥太华发生枪击案 致一死三伤','content':
//         ' This module provides a minimalistic ACL implementation inspired by Zend_ACL.'
// }).save();
// new Anno({title: '去年12月初加拿大大选后新一届国会复会','content':
//         ' a minimalistic ACL implementation inspired by Zend_ACL.'
// }).save();
// new Anno({title: '特朗普称伊核？协议各方应退出并起草新协议 外交部表态','content':
//         ' This module provides a minimalistic ired by Zend_ACL.'
// }).save();
// new Anno({title: '首都渥太华发生枪击案 致一死三伤','content':
//         ' This module provides a minimalistic ACL implementation inspired by Zend_ACL.'
// }).save();
// new Anno({title: '12月初加拿大大选后新一届国会复会','content':
//         ' a minimalistic ACL implementation inspired by Zend_ACL.'
// }).save();
// new Anno({title: '协议各方应退出并起草新协议 外交部表态','content':
//         ' This module provides a minimalistic ired by Zend_ACL.'
// }).save();
// new Anno({title: '渥太华发生枪击案 致一死三伤','content':
//         ' This module provides a minimalistic ACL implementation inspired by Zend_ACL.'
// }).save();
// new Anno({title: '加拿大大选后新一届国会复会','content':
//         ' a minimalistic ACL implementation inspired by Zend_ACL.'
// }).save();
// new Anno({title: '各方应退出并起草新协议 外交部表态','content':
//         ' This module provides a minimalistic ired by Zend_ACL.'
// }).save();
module.exports = Anno;
