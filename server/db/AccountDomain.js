'use strict';

var mongoose = require('./mongooseDomain').mongoose;

var Schema = mongoose.Schema;

// 图书分类
var AccountModelSchema = new Schema({
    // 编号
    accountWeChatId: {type: String},
    // 显示中文
    accountName: {type: String}
});

var AccountModel = mongoose.model('AccountModel', AccountModelSchema, 'AccountModel');

exports.AccountModel = {
    getUserByAccount : account =>{
        return AccountModel.findOne({accountWeChatId:account}).exec((err, result)=>{
            if (err) {
                console.log('error ' + err);
            } else {
                return result;
            }
        });
    }
};
