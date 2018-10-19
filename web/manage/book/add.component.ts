import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';

import {LibraryService} from "../services/LibraryService";

@Component({
  selector: 'add-component',
  templateUrl: "manage/book/add.html"
})
export class AddComponent {
  private book:any = {coverURL:''};
  private categoryList:Object[] = [];
  private success:boolean = false;

  constructor(private route: ActivatedRoute, private libraryService: LibraryService) {
    let that = this;

    this.route.params.forEach((param: any) => {
      // 修改进入，查询book详细信息，并展现在页面
      if (param.id != 'manage.html') {
        libraryService.getBookById(param).then(response => {
          that.book = response.json()[0];
        });
      }
      // 添加进入，初始化页面所有元素
      else {
        that.book = {title: '', categoryId: '', description: ''};
      }
    });
    libraryService.getAllCategory().then(response => {
      that.categoryList = response.json();
    });
  }

  saveBook() {
    let that = this;
    this.libraryService.saveOrUpdateBook(this.book).then(response => {
      this.success = response.json().flag;
      setTimeout(()=> {
        that.success = false;
      }, 1000)
    });
  }


  // A: 初始化定义uploader变量,用来配置input中的uploader属性
  uploader = new FileUploader({
    url: "/uploadFile",
    method: "POST",
    itemAlias: "file"
  });

  // B: 定义事件，选择文件
  selectedFileOnChanged(event: any) {
    this.uploadFile();
  }

  // D: 定义事件，上传文件
  uploadFile() {
    let that = this;
    // 上传
    this.uploader.queue[0].onSuccess = (response, status, headers) => {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        that.book.coverURL = JSON.parse(response).path;
      } else {
        // 上传文件后获取服务器返回的数据错误
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }
}
