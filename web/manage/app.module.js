"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_1 = require("./app.routing");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng2_file_upload_1 = require("ng2-file-upload");
//Components
var app_component_1 = require("./app.component");
var add_component_1 = require("./book/add.component");
var edit_component_1 = require("./book/edit.component");
var addCategory_component_1 = require("./book/addCategory.component");
var borrowedList_component_1 = require("./book/borrowedList.component");
//Services
var LibraryService_1 = require("./services/LibraryService");
var ManageModule = /** @class */ (function () {
    function ManageModule() {
    }
    ManageModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing, forms_1.FormsModule, common_1.CommonModule, ng2_file_upload_1.FileUploadModule],
            declarations: [app_component_1.AppComponent, edit_component_1.EditComponent, add_component_1.AddComponent, addCategory_component_1.AddCategoryComponent, borrowedList_component_1.BorrowedListComponent],
            providers: [LibraryService_1.LibraryService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], ManageModule);
    return ManageModule;
}());
exports.ManageModule = ManageModule;
//# sourceMappingURL=app.module.js.map