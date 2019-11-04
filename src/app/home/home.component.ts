import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import {saveAs} from 'file-saver';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Text:any = "AngularTech";
  selectedFiles:any;
  formData: FormData = new FormData();

  constructor(private homeInstance:HomeService) { }

  ngOnInit() {
    // this.selectedFiles = [];
  }

  single(files: File){
    console.log(files[0].name);
    this.formData.append('streamfile', files[0], files[0].name);

    // console.log(event);
    // if(event.target.files.length > 0){
    //   this.selectedFiles = <File>event.target.files[0];
    //   console.log(this.selectedFiles);
      
    // }
  }

  UploadSingleFile(){
   
    this.homeInstance.single(this.formData);
    // .subscribe(data=>{
    //   console.log(data);
    // }, Error=>{
    //   console.log(Error.error);
    // });
  }

  DownloadSingleFile(){
    let obj = {
      "fileName":'file4'
    }
    this.homeInstance.DownloadSingleFile();
    // .subscribe((data)=>{
    //   saveAs(data);
    // },error=>{
    //   console.log(error);
    // })
  }

  multiple(event){
    if(event.traget.files.length > 0){
      this.selectedFiles = event.traget.files;
    }
  }

  UploadmultipleFile(){

    for(let imgs of this.selectedFiles){
      this.formData.append('files', imgs);
    }
    this.homeInstance.multiple(this.formData).subscribe(data=>{

    }, Error=>{

    });
  }

}
