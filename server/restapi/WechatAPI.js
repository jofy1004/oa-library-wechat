'use strict';

var tokenDomain = require('../db/TokenDomain').TokenDomain;

//获取access_token
exports.WechatAPI = {
    getUser: function *(code) {
        let result = yield tokenDomain.getAccessToken();
        let param = {
            token: result.token,
            code: code
        };
        var USER_URL = `https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${param.token}&code=${param.code}`;
        return yield tokenDomain.httpGet(USER_URL);
    }
};