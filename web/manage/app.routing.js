"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var add_component_1 = require("./book/add.component");
var edit_component_1 = require("./book/edit.component");
var addCategory_component_1 = require("./book/addCategory.component");
var borrowedList_component_1 = require("../manage/book/borrowedList.component");
var appRoutes = [
    {
        path: 'manage/:id',
        component: add_component_1.AddComponent
    },
    {
        path: 'edit',
        component: edit_component_1.EditComponent
    },
    {
        path: 'addCategory',
        component: addCategory_component_1.AddCategoryComponent
    },
    {
        path: 'borrowedList',
        component: borrowedList_component_1.BorrowedListComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map