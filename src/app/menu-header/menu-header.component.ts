import { Component, OnInit } from '@angular/core';
import { MenuHeaderService } from './menu-header.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css'],
  providers: [MenuHeaderService]
})
export class MenuHeaderComponent implements OnInit {
  menuDetails:any = [];
  constructor(private menuInstance:MenuHeaderService) { }

  ngOnInit() {
    this.menuDetails = [];
    this.getMenuDetails();
  }

  getMenuDetails(){
    this.menuInstance.menu().subscribe(data=>{
      if(data.result.length>0){
        data.result.forEach((element) => {
          this.menuDetails.push(element);
        });
      }
    }, Error=>{
      console.log("--Error--"+Error);
      
    })
  }

}
