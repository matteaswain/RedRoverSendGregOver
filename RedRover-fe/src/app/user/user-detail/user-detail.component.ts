import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = new User();
  id: number = 0;

  constructor(private syssvc: SystemService, private usersvc: UserService,private router: Router, private activatedRoute: ActivatedRoute) { }

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


  refresh(): void{
    this.id = this.activatedRoute.snapshot.params.id;
    this.usersvc.getByPk(this.id).subscribe(
      res => {console.debug("Success", res);
    this.user = res;
  },
  err =>{console.error(err);}
    )
  }


  lightSwitch(light: string): void{
    switch(light){
      case('red'): 
      this.usersvc.statusRed(this.loggedInUser).subscribe(
        res => console.log("Updated to red!"),
        err => console.error(err)
      );
      this.red = this.redLit;
      this.yellow = this.yellowUnlit;
      this.green = this.greenUnlit;
      break;
      case('yellow'): 
      this.usersvc.statusYellow(this.loggedInUser).subscribe(
        res => console.log("Updated to yellow!"),
        err => console.error(err))
      this.yellow = this.yellowLit;
      this.red = this.redUnlit;
      this.green = this.greenUnlit;      
      break;
      case('green'): 
      this.usersvc.statusGreen(this.loggedInUser).subscribe(
        res => console.log("Updated to green!"),
        err => console.error(err))
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
   if(this.syssvc.loggedInUser !== null) {this.loggedInUser = this.syssvc.loggedInUser}
   else { const routeParams = this.activatedRoute.snapshot.paramMap;
  const id = Number(routeParams.get('id'))
  this.usersvc.getByPk(id).subscribe(
    res => this.loggedInUser = res,
    err => console.error(err)
  )}
  }

}
