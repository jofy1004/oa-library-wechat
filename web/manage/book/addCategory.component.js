"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by CCC on 2018/5/8.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LibraryService_1 = require("../services/LibraryService");
var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(route, libraryService) {
        this.route = route;
        this.libraryService = libraryService;
        this.category = {};
        this.delCategory = {};
        this.success = false;
        this.exists = false;
        this.msg = false;
        this.existsCategoryFlag = false;
        this.categoryList = [];
        var that = this;
        libraryService.getAllCategory().then(function (response) {
            that.categoryList = response.json();
        });
    }
    /**
     * 新增类别
     */
    AddCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        var that = this;
        if (this.category.newCategoryName && this.category.newCategoryName != null && this.category.newCategoryName.length > 0) {
            this.category.categoryName = this.category.newCategoryName;
            this.category.newCategoryName = null;
            this.libraryService.addCategory(this.category).then(function (response) {
                _this.success = response.json().flag;
                _this.exists = response.json().existsFlag;
                _this.categoryList = response.json().categoryList;
                setTimeout(function () {
                    that.success = false;
                    that.exists = false;
                }, 1500);
            });
        }
        else {
            this.msg = true;
            setTimeout(function () {
                that.msg = false;
            }, 1500);
        }
    };
    /**
     * 修改类别
     */
    AddCategoryComponent.prototype.editCategory = function () {
        var _this = this;
        var that = this;
        if (this.category._id && this.category._id != "" && this.category.editCategoryName != null && this.category.editCategoryName.length > 0) {
            this.msg = false;
            this.category.categoryName = this.category.editCategoryName;
            this.category.editCategoryName = null;
            this.libraryService.editCategory(this.category).then(function (response) {
                _this.success = response.json().flag;
                _this.exists = response.json().existsFlag;
                _this.categoryList = response.json().categoryList;
                setTimeout(function () {
                    that.success = false;
                    that.exists = false;
                }, 1500);
            });
        }
        else {
            this.msg = true;
            setTimeout(function () {
                that.msg = false;
            }, 1500);
        }
    };
    AddCategoryComponent.prototype.deleteCategory = function () {
        var _this = this;
        var that = this;
        if (this.delCategory._id && this.delCategory._id != "") {
            this.libraryService.deleteCategory(this.delCategory._id).then(function (response) {
                _this.success = response.json().flag;
                _this.categoryList = response.json().categoryList;
                _this.existsCategoryFlag = response.json().existsCategoryFlag;
                _this.delCategory._id = "";
                setTimeout(function () {
                    that.success = false;
                    that.existsCategoryFlag = false;
                }, 1500);
            });
        }
        else {
            this.msg = true;
            setTimeout(function () {
                that.msg = false;
            }, 1500);
        }
    };
    AddCategoryComponent = __decorate([
        core_1.Component({
            selector: "addCategory-component",
            templateUrl: "manage/book/addCategory.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, LibraryService_1.LibraryService])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());
exports.AddCategoryComponent = AddCategoryComponent;
//# sourceMappingURL=addCategory.component.js.map