'use static';

var app = require('koa')();
var serve = require('koa-static');
var router = require('koa-router')();
var bodyParser = require('koa-body-parser');

var libraryAPI = require("./restapi/LibraryAPI");

var env = require('./env');

// 将request中的数据放在this.request.body中
app.use(bodyParser());
// 引用所有静态文件
app.use(serve(__dirname + '/../web'));

// 引用所有请求
app.use(libraryAPI.routes());

app.use(router.allowedMethods());



// 设置端口
app.listen(env.PORT);
console.log('http://localhost:' + env.PORT+'/getUser');