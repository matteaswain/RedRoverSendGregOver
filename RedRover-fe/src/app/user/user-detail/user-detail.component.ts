import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private syssvc: SystemService, ) { }

  ngOnInit(): void {
  }

}
