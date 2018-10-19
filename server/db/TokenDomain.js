'use strict';

// var wechat = require('wechat-enterprise');
var https = require('https');
var _ = require('lodash');
var mongoose = require('./mongooseDomain').mongoose;
var env = require('../env');

var ACCOUNT_TOKEN_URL = 'https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=' + env.CorpID + '&corpsecret=' + env.Secret;

var Schema = mongoose.Schema;

var TokenSchema = new Schema({
    token: {type: String},
    time: {type: Number}
});

var Tokens = mongoose.model('Tokens', TokenSchema, 'Tokens');

exports.TokenDomain = {
    /**
     * 获取Token，若db有未失效的，则返回db中的token，否则去远程获取Token
     * @returns {*}
     */
    getAccessToken: function*() {
        var that = this;
        var token = yield Tokens.findOne().where('time').gt(_.now()).exec((err, result) => {
            if (err) {
                console.log('error ' + err);
            } else {
                if (result) {
                    return result;
                }
            }
        });
        if (!token) {
            return that.httpGet(ACCOUNT_TOKEN_URL).then((result) => {
                let token = new Tokens({token: result.access_token, time: (_.now() + 7200000)});
                token.save();
                return token;
            });
        } else {
            return token;
        }
    },

    /**
     * 通用Get请求
     * @param url
     * @returns {Promise}
     */
    httpGet: function (url) {
        return new Promise((resolve, reject) => {
            https.get(url, response => {
                response.on('data', data => {
                    resolve(JSON.parse(data));
                });
            });
        });
    }
};