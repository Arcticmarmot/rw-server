const acl_ = require('acl');
module.exports = (db)=>{
    const acl = new acl_(new acl_.mongodbBackend(db, 'acl_', true));
    acl.allow([
        {
            roles:'user',
            allows:[
                {resources:'/announce', permissions:'get'},
                {resources:'/thread', permissions:['get','post']}
            ]
        },
        {
            roles:'admin',
            allows:[
                {resources:'/announce', permissions:['post','delete']},
                {resources:'/thread', permissions: ['delete']},
                {resources: '/user',permissions: ['post','delete','get']}
            ]
        },
        {
            roles:'root',
            allows:[
                {resources:'/admin', permissions:['post','delete','get']},
            ]
        }
    ]);
    acl.addRoleParents('admin', 'user');
    acl.addRoleParents('root', 'admin');
    return acl;
};


