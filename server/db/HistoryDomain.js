'use strict';

var mongoose = require('./mongooseDomain').mongoose;

var Schema = mongoose.Schema;
// 历史记录
var HistorySchema = new Schema({
    // 类别ID
    categoryId: {type: Schema.Types.ObjectId, ref: 'Category'},
    // 图书ID
    bookId: {type: Schema.Types.ObjectId, ref: 'Books'},
    // 借阅人ID
    account: {type: String},
    // 借阅人姓名
    accountName: {type: String},
    // 借阅时间
    borrowDate: {type: Date},
    // 借阅时间
    returnDate: {type: Date}
});

var History = mongoose.model('LibHistory', HistorySchema, 'LibHistory');

exports.HistoryDomain = {
    getHistoryByAccount: account => {
        return History.find({account: account}).populate('categoryId').populate('bookId').exec((err, result) => {
            if (err) {
                if (err) {
                    console.log('error ' + err);
                } else {
                    return result;
                }
            }
        });
    },
    saveHistory: (categoryId, bookId, account, accountName, borrowDate) => {
        let history = new History({
            categoryId: categoryId,
            bookId: bookId,
            account: account,
            accountName: accountName,
            borrowDate: borrowDate
        });
        history.save();
    }
};