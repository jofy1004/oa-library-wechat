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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng2_file_upload_1 = require("ng2-file-upload");
var LibraryService_1 = require("../services/LibraryService");
var AddComponent = /** @class */ (function () {
    function AddComponent(route, libraryService) {
        this.route = route;
        this.libraryService = libraryService;
        this.book = { coverURL: '' };
        this.categoryList = [];
        this.success = false;
        // A: 初始化定义uploader变量,用来配置input中的uploader属性
        this.uploader = new ng2_file_upload_1.FileUploader({
            url: "/uploadFile",
            method: "POST",
            itemAlias: "file"
        });
        var that = this;
        this.route.params.forEach(function (param) {
            // 修改进入，查询book详细信息，并展现在页面
            if (param.id != 'manage.html') {
                libraryService.getBookById(param).then(function (response) {
                    that.book = response.json()[0];
                });
            }
            // 添加进入，初始化页面所有元素
            else {
                that.book = { title: '', categoryId: '', description: '' };
            }
        });
        libraryService.getAllCategory().then(function (response) {
            that.categoryList = response.json();
        });
    }
    AddComponent.prototype.saveBook = function () {
        var _this = this;
        var that = this;
        this.libraryService.saveOrUpdateBook(this.book).then(function (response) {
            _this.success = response.json().flag;
            setTimeout(function () {
                that.success = false;
            }, 1000);
        });
    };
    // B: 定义事件，选择文件
    AddComponent.prototype.selectedFileOnChanged = function (event) {
        this.uploadFile();
    };
    // D: 定义事件，上传文件
    AddComponent.prototype.uploadFile = function () {
        var that = this;
        // 上传
        this.uploader.queue[0].onSuccess = function (response, status, headers) {
            // 上传文件成功
            if (status == 200) {
                // 上传文件后获取服务器返回的数据
                that.book.coverURL = JSON.parse(response).path;
            }
            else {
                // 上传文件后获取服务器返回的数据错误
            }
        };
        this.uploader.queue[0].upload(); // 开始上传
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-component',
            templateUrl: "manage/book/add.html"
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, LibraryService_1.LibraryService])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map