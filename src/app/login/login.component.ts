import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControlName, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  signupForm : FormGroup;
  userNames: any;

  selectedTab:any;
  constructor(private fb:FormBuilder, private loginServiceInstance: LoginService, private router:Router, private routes:ActivatedRoute ) { }

  ngOnInit() {
    this.selectedTab = 1;
    this.loginValidations();
    this.signupValidations();
    this.userNames;
  }

  loginValidations(){
    this.loginForm = this.fb.group({
      usr: [null, Validators.required],
      pwd: [null, Validators.required],
    })
  }

  signupValidations(){
    this.signupForm = this.fb.group({
      usr: [null, Validators.required],
      eml: [null, Validators.required],
      pwd: [null, Validators.required],
    })
  }

  login(value){
    console.log("\n---------Login-Details----------"+JSON.stringify(value));
    let obj = {
      "email":value.usr,
      "password":value.pwd
    }

    this.loginServiceInstance.login(obj).subscribe((data) => {
      obj = null;
      if(data.token){
        localStorage.clear();
        localStorage.setItem('tk', data.token);
        localStorage.setItem('loggedIn', "1");

        this.router.navigate(['../home'], {relativeTo: this.routes});
      }

    }, Error=>{
      obj = null;
    });

  }

  signup(value){
    console.log("\n---------signUp-Details----------"+JSON.stringify(value));
    let obj = {
      "name": value.usr,
      "email": value.eml,
      "password": value.pwd
    }
    this.loginServiceInstance.signUp(obj).subscribe((data) => {

    }, Error=>{

    });
  }

  tabClick(value){
    // console.log("\n--------selectedTab-------"+this.selectedTab);
  }
}
