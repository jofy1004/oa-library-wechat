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
var LibraryService_1 = require("../../manage/services/LibraryService");
var BorrowedListComponent = /** @class */ (function () {
    function BorrowedListComponent(libraryService) {
        this.libraryService = libraryService;
        this.borrowedListBooks = [];
        var that = this;
        libraryService.getAllBorrowedList().then(function (response) {
            that.borrowedListBooks = response.json();
        });
    }
    /**
     * 管理员还书
     * @param bookId
     */
    BorrowedListComponent.prototype.managerReturnBook = function (bookId) {
        var that = this;
        this.libraryService.managerReturnBook(bookId).then(function (response) {
            that.borrowedListBooks = response.json();
        });
    };
    BorrowedListComponent = __decorate([
        core_1.Component({
            selector: 'borrowedList-component',
            templateUrl: 'manage/book/borrowedList.html'
        }),
        __metadata("design:paramtypes", [LibraryService_1.LibraryService])
    ], BorrowedListComponent);
    return BorrowedListComponent;
}());
exports.BorrowedListComponent = BorrowedListComponent;
//# sourceMappingURL=borrowedList.component.js.map