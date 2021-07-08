import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private syssvc: SystemService, private usersvc: UserService) { }

  loggedInUser!: User;
  redLit: string = "assets/images/RRL-red-lit.png";
  redUnlit: string = "assets/images/RRL-red-unlit.png";
  yellowLit: string = "assets/images/RRL-yellow-lit.png";
  yellowUnlit: string = "assets/images/RRL-yellow-unlit.png";
  greenLit: string = "assets/images/RRL-green-lit.png";
  greenUnlit: string = "assets/images/RRL-green-unlit.png";
  red: string = this.redUnlit;
  yellow: string = this.yellowUnlit;
  green: string = this.greenLit;

  lightSwitch(light: string): void{
    switch(light){
      case('red'): 
      this.usersvc.statusRed(this.loggedInUser);
      this.red = this.redLit;
      this.yellow = this.yellowUnlit;
      this.green = this.greenUnlit;
      break;
      case('yellow'): 
      this.usersvc.statusYellow(this.loggedInUser)
      this.yellow = this.yellowLit;
      this.red = this.redUnlit;
      this.green = this.greenUnlit;
      break;
      case('green'): 
      this.usersvc.statusGreen(this.loggedInUser)
      this.lightReset();
    }
    console.log(this.loggedInUser);
  }

  lightReset(): void{
    this.red = this.redUnlit;
    this.yellow = this.yellowUnlit;
    this.green = this.greenLit;
  }

  ngOnInit(): void {
   if(this.syssvc.loggedInUser != null) {this.loggedInUser = this.syssvc.loggedInUser}
  }

}
