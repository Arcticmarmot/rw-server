const mongoose = require('./mongoose');

const userSchema = mongoose.Schema(
    {
        account: String,
        password: String,
        isLogin: Boolean,
    }
);

const User = mongoose.model('user',userSchema);

module.exports = User;
