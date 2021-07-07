import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from '../../misc/system.service';
import {UserService} from '../user.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  username : string = "";
  password : string ="";
  message : string ="";


  constructor(
    private syssvs : SystemService,
    private router : Router, 
    private usersvs : UserService
  )  {}


  login () : void 
  {

    this.syssvs. loggedInUser = null;
    this.usersvs.login(this.username,this.password).subscribe
    (
      res => {console.debug(res);
      this.syssvs.loggedInUser = res;
    console.log(this.syssvs.loggedInUser);},
    err => {this.message= "Login Failed!"; console.error(err)}
    );

  }
  ngOnInit(): void {
  }

}
