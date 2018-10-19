/**
 * Created by CCC on 2018/5/8.
 */
import {Component} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
import {LibraryService} from "../services/LibraryService";

@Component({
  selector:"addCategory-component",
  templateUrl:"manage/book/addCategory.html"
}) export class AddCategoryComponent{
  private category:any = {};
  private delCategory:any={};
  private success:boolean = false;
  private exists:boolean = false;
  private msg:boolean=false;
  private existsCategoryFlag:boolean=false;
  private categoryList:Object[] = [];
  constructor(private route: ActivatedRoute, private libraryService: LibraryService) {
    let that = this;
    libraryService.getAllCategory().then(response => {
      that.categoryList = response.json();
    });
  }

  /**
   * 新增类别
   */
  addCategory() {
    let that = this;
    if(this.category.newCategoryName && this.category.newCategoryName!=null && this.category.newCategoryName.length>0 ){
      this.category.categoryName=this.category.newCategoryName;
      this.category.newCategoryName=null;
      this.libraryService.addCategory(this.category).then(response => {
        this.success = response.json().flag;
        this.exists = response.json().existsFlag;
        this.categoryList=response.json().categoryList;
        setTimeout(()=> {
          that.success = false;
          that.exists=false;
        }, 1500)
      });
    }else{
      this.msg=true;
      setTimeout(()=> {
        that.msg = false;
      }, 1500)
    }
  }

  /**
   * 修改类别
   */
  editCategory(){
    let that = this;

    if(this.category._id && this.category._id!="" &&  this.category.editCategoryName!=null && this.category.editCategoryName.length>0 ){
      this.msg=false;
      this.category.categoryName=this.category.editCategoryName;
      this.category.editCategoryName=null;
      this.libraryService.editCategory(this.category).then(response => {
        this.success = response.json().flag;
        this.exists = response.json().existsFlag;
        this.categoryList=response.json().categoryList;
        setTimeout(()=> {
          that.success = false;
          that.exists=false;
        }, 1500)
      });
    }else{
      this.msg=true;
      setTimeout(()=> {
        that.msg = false;
      }, 1500)
    }
  }

  deleteCategory(){
    let that = this;
    if(this.delCategory._id && this.delCategory._id!=""){
      this.libraryService.deleteCategory(this.delCategory._id).then(response => {
        this.success = response.json().flag;
        this.categoryList=response.json().categoryList;
        this.existsCategoryFlag=response.json().existsCategoryFlag;
        this.delCategory._id="";
        setTimeout(()=> {
          that.success = false;
          that.existsCategoryFlag=false;
        }, 1500)
      });
    }else{
      this.msg=true;
      setTimeout(()=> {
        that.msg = false;
      }, 1500)
    }
  }
}
