const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/others');
const loginRouter = require('./routes/login/login');
const authRouter = require('./routes/login/auth');
const logoutRouter = require('./routes/login/logout');
const announceRouter = require('./routes/annos/announce');
const pageNumRouter = require('./routes/annos/page-num');

//middleware
const aclMiddleware = require('./middleware/authorize');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  if(req.path !== '/' && !req.path.includes('.')){
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': req.headers.origin || '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8'
    })
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next()
});

//routes
app.use('/', indexRouter);
app.post('/login',loginRouter.login);
app.get('/auth',authRouter.auth);
app.get('/logout',logoutRouter.logout);
app.get('/announce',aclMiddleware,announceRouter.getAnnounce);
app.post('/announce',aclMiddleware,announceRouter.postAnnounce);
app.get('/announce/page_num',aclMiddleware,pageNumRouter.getPageNum);





app.use(function(err, req, res, next) {
  console.log(err);
  res.writeHead(err.status || 500,err.message,
      {'Content-Type': 'application/json;charset=utf8'}
  );
  res.end(JSON.stringify({tip:err.tip || ''}));
});

module.exports = app;
