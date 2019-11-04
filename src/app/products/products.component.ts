import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import {saveAs} from 'file-saver';
import { error } from 'util';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})
export class ProductsComponent implements OnInit {

  selectedTab:any = 1;
  tableData:any = [];
  lastRecordId:any;
  recordsFlag:boolean = false;

  constructor(private productInstance:ProductsService) { }

  ngOnInit() {
    this.tableData = [];

    this.all(0);
  }

  tabClicks(val){
    
  }

  all(id){
    this.productInstance.getAll(id).subscribe(data=>{
      // console.log("\n----data---"+data);
      
      if(data.result.length > 0){
        this.recordsFlag = false;

        for(let p of data.result){
          if (this.tableData.length > 1) {
            this.tableData.push(p);
          } else {
            this.tableData.push(p);
          }
        }

        this.lastRecordId = this.tableData[this.tableData.length - 1]._id;
        // console.log("\n-----lastRecordId--------"+this.lastRecordId);        
      }else{
        this.recordsFlag = true;
      }

    },Error=>{

    })
  }

  exportAsExcel(){
    this.productInstance.generateExcel().subscribe(data=>{
      
    }, error=>{
      
    });
    setTimeout(()=>{
      this.download();
    },5000);
  }
  
  download(){
    console.log("\n-------Method--call-------------");
    
    this.productInstance.downloadExcel('book.xlsx')
    .subscribe(data=>{

      const BLOB = new Blob([data], {type: 'application/vnd.ms.excel'});
      const FILE = new File([BLOB], 'book.xlsx', {type: 'application/vnd.ms.excel'});
      saveAs(FILE);

    }, error=>{
      console.log("\n--------Err----------"+error);
    })
  }

}
