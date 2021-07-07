import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  redLit: string = "assets/images/RRL-red-lit.png";
  redUnlit: string = "assets/images/RRL-red-unlit.png";
  yellowLit: string = "assets/images/RRL-yellow-lit.png";
  yellowUnlit: string = "assets/images/RRL-yellow-unlit.png";
  greenLit: string = "assets/images/RRL-green-lit.png";
  greenUnlit: string = "assets/images/RRL-green-unlit.png";
  red: string = "";
  yellow: string = "";
  green: string = "";

  lightSwitch(light: string): void{
    switch(light){
      case('red'): this.red = this.redLit;
      this.yellow = this.yellowUnlit;
      this.green = this.greenUnlit;
      break;
      case('yellow'): this.yellow = this.yellowLit;
      this.red = this.redUnlit;
      this.green = this.greenUnlit;
      break;
      case('green'): this.lightReset();
    }
  }

  lightReset(): void{
    this.red = this.redUnlit;
    this.yellow = this.yellowUnlit;
    this.green = this.greenLit;
  }

  ngOnInit(): void {
  }

}
