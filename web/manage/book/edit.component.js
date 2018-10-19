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
var LibraryService_1 = require("../services/LibraryService");
var EditComponent = /** @class */ (function () {
    function EditComponent(libraryService) {
        this.libraryService = libraryService;
        this.books = [];
        this.param = { query: '', searchFlag: false };
        var that = this;
        libraryService.getAllBooks().then(function (response) {
            that.books = response.json();
        });
    }
    EditComponent.prototype.searchBarClick = function () {
        this.param.query = '';
        this.param.searchFlag = true;
        document.getElementById("iptSearch").focus();
    };
    EditComponent.prototype.cancelFilter = function () {
        var that = this;
        this.param.searchFlag = false;
        this.libraryService.getAllBooks().then(function (response) {
            that.books = response.json();
        });
    };
    EditComponent.prototype.queryBooks = function (value) {
        var that = this;
        this.libraryService.getBookLikeName(value).then(function (response) {
            that.books = response.json();
        });
    };
    EditComponent.prototype.removeBook = function (value) {
        var that = this;
        event.stopPropagation();
        this.libraryService.removeBook(value).then(function (response) {
            that.books = response.json();
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'edit-component',
            templateUrl: "manage/book/edit.html"
        }),
        __metadata("design:paramtypes", [LibraryService_1.LibraryService])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map