const mongoose = require('../init/mongoose');

const userSchema = mongoose.Schema(
    {
        account: String,
        password: String,
        isLogin: Boolean,
        role: String,
        createdAt: Date,
    }
);

const User = mongoose.model('user',userSchema);
//new User({account: '3180704102','password':'d123456',isLogin: false, role: 'user'}).save();
module.exports = User;
