'use strict';

var mongoose = require('./mongooseDomain').mongoose;
var historyDomain = require('./HistoryDomain').HistoryDomain;

var Schema = mongoose.Schema;

// 图书
var BooksSchema = new Schema({
    categoryId: {type: Schema.Types.ObjectId, ref: 'Category'},
    // 书名
    title: {type: String},
    // 封面链接
    coverURL: {type: String},
    // 描述
    description: {type: String},
    // 借阅人
    account: {type: String},
    // 借阅人姓名
    borrower: {type: String},
    // 借阅时间
    borrowDate: {type: Date}
});

var Books = mongoose.model('Books', BooksSchema, 'Books');

exports.LibraryDomain = {
    /**
     * 按照自定义查询条件查询图书集合
     * @param{Object} param
     * @returns {Promise}
     */
    findBooksByParam: (param) => {
        if (param) {
            return Books.find(param).exec((err, result) => {
                if (err) {
                    if (err) {
                        console.log('error ' + err);
                    } else {
                        return result;
                    }
                }
            });
        }

    },

    /**
     * 按照分类查询图书集合
     * @param id
     * @returns {Promise}
     */
    findBooksById: (id) => {
        if (id) {
            return Books.find({categoryId: mongoose.Types.ObjectId(id)}).exec((err, result) => {
                if (err) {
                    if (err) {
                        console.log('error ' + err);
                    } else {
                        return result;
                    }
                }
            });
        }

    },

    /**
     * 按照_id级联查询书籍
     * @param id
     * @returns {Promise}
     */
    findBookById: (id) => {
        if (id) {
            return Books.find({_id: mongoose.Types.ObjectId(id)}).populate('categoryId').exec((err, result) => {
                if (err) {
                    console.log('error ' + err);
                } else {
                    return result;
                }
            });
        }

    },

    /**
     * 按照_id查询书籍
     * @param id
     * @returns {Promise}
     */
    findBookByIdNotRef: (id) => {
        if (id) {
            return Books.find({_id: mongoose.Types.ObjectId(id)}).exec((err, result) => {
                if (err) {
                    console.log('error ' + err);
                } else {
                    return result;
                }
            });
        }

    },

    /**
     * 借阅书籍，返回更改后的对象
     * @param bookId
     * @param account
     * @returns {Promise}
     */
    borrowBook: (bookId, account, accountName) => {
        if (bookId && account) {
            let borrowDate = new Date();
            return Books.findOneAndUpdate({_id: mongoose.Types.ObjectId(bookId)}, {
                account: account,
                borrower: accountName,
                borrowDate: borrowDate
            }, {new: true}).populate('categoryId').exec((err, result) => {
                if (err) {
                    console.log('error ' + err);
                } else {
                    historyDomain.saveHistory(result.categoryId._id, result._id, account, accountName, borrowDate);
                    return result;
                }
            });
        }

    },

    /**
     * 归还书籍，返回变更后的List
     * @param bookId
     * @param account
     */
    returnBook: (bookId, account)=> {
        if (bookId && account) {
            return Books.update({_id: mongoose.Types.ObjectId(bookId), account: account}, {
                account: '',
                borrower: '',
                borrowDate: ''
            }).exec((err, result) => {
                if (err) {
                    console.log('error ' + err);
                } else {
                    return result;
                }
            });
        }
    },
    /**
     * 管理员 还书
     * @param bookId
     * @returns {Array|{index: number, input: string}|Promise}
     */
    managerReturnBook: (bookId)=> {
        if (bookId) {
            return Books.update({_id: mongoose.Types.ObjectId(bookId)}, {
                account: '',
                borrower: '',
                borrowDate: ''
            }).exec((err, result) => {
                if (err) {
                    console.log('error ' + err);
                } else {
                    return true;
                }
            });
        }
    },
    /**
     *
     * @param book
     * @returns {*}
     */
    saveOrUpdateBook: (book)=> {
        if (book._id) {
            return Books.findOneAndUpdate({_id: mongoose.Types.ObjectId(book._id)}, book, {new: true}).exec((err, result) => {
                if (err) {
                    console.log('error ' + err);
                } else {
                    return true;
                }
            });
        } else {
            let param = new Books({
                categoryId: book.categoryId,
                // 书名
                title: book.title,
                // 封面链接
                coverURL: book.coverURL,
                // 描述
                description: book.description,
            });
            return param.save((err, result) => {
                if (err) {
                    console.log('error ' + err);
                } else {
                    return true;
                }
            });
        }
    },
    removeBook : id =>{
        return Books.remove({_id: mongoose.Types.ObjectId(id)}, (err, result)=>{
            if (err) {
                console.log('error ' + err);
            } else {
                return true;
            }
        })
    }
};