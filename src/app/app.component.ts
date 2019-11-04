import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApplication';

  constructor( private router:Router, private Routes:ActivatedRoute){

  }

  ngOnInit(){
    this.router.navigate(['\login',], { relativeTo: this.Routes });
  }

}
