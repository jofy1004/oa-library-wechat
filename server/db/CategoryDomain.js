'use strict';

var mongoose = require('./mongooseDomain').mongoose;

var Schema = mongoose.Schema;

// 图书分类
var CategorySchema = new Schema({
    // 编号
    categoryId: {type: String},
    // 显示中文
    categoryName: {type: String}
});

var Category = mongoose.model('Category', CategorySchema, 'Category');

exports.CategoryDomain = {
    /**
     * 查询所有图书分类
     * @returns {Promise}
     */
    findAllCategory: () => {
        return Category.find().exec((err, result) => {
            if (err) {
                console.log('error ' + err);
            } else {
                return result;
            }
        });
    },

    /**
     * 按照参数查询分类
     * @param param
     * @returns {Promise}
     */
    findCategoryByParam: (param)=> {
        return Category.find(param).exec((err, result) => {
            if (err) {
                console.log('error ' + err);
            } else {
                return result;
            }
        });
    },
    /**
     * 保存 类别
     * @param category
     * @returns {Promise|*}
     */
    addCategory: (category)=> {
        let param = new Category({
            categoryName: category.categoryName,
        });
        return param.save((err, result) => {
            if (err) {
                console.log('error ' + err);
            } else {
                return true;
            }
        });
    },
    /**
     * 修改 类别
     * @param category
     * @returns {Promise}
     */

    editCategory:(category)=>{
        return Category.findOneAndUpdate({_id: mongoose.Types.ObjectId(category._id)}, category, {new: true}).exec((err, result) => {
            if (err) {
                console.log('error ' + err);
            } else {
                return true;
            }
        });
    },
    /**
     * 删除类别
     * @param id
     */
    deleteCategory:(id)=>{
        return Category.remove({_id: mongoose.Types.ObjectId(id)}, (err, result)=>{
            if (err) {
                console.log('error ' + err);
            } else {
                return true;
            }
        })
    }
};