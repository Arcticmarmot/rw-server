const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

MongoClient.connect(url, { useNewUrlParser: true }).then(client => {
    console.log('connected...');
    const rw = client.db("rw");
    rw.createCollection('users').then(res=>{
        db= rw.collection('users');
        console.log('created users');
        //new User({account: '3180704101', password: 'd123456',isLogin:0}).insert();
    }).catch(err=>{
        throw err;
    })
}).catch(err=>{
    throw err;
});

class User{
    constructor(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }
    insert(cb){
        db.insertOne(this,{w:1}).then((data)=>{
            cb(null,data);
        }).catch(err=>{
            cb(err);
        });
    }
    static find_by_account(account,cb){
        db.findOne({account:account}).then((doc)=>{
            cb(null,doc)
        }).catch((err)=>{
            cb(err);
        });
    }
    static find_by_account_login(account,cb){
        db.findOne({account:account},{projection:{account:1,password:1,isLogin:1}}).then((data)=>{
            cb(null,data)
        }).catch((err)=>{
            cb(err);
        });
    }
    static update_password(account,value,cb){
        db.updateOne({account:account},{$set:{password:value}}).then((data)=>{
            cb(null,data);
        }).catch((err)=>{
            cb(err);
        })
    }
    static setLogin(account,isLogin,cb){
        db.updateOne({account:account},{$set:{isLogin:isLogin}}).then((data)=>{
            cb(null,data);
        }).catch(err=>{
            cb(err);
        })
    }
}
module.exports = User;
