import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../user/userDitails';
import { userService } from '../sharedService/userService';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogComponent implements OnInit {
newUser: User;

  constructor() { }

  ngOnInit() {
  }

  submit(){
   userService.login(this.newUser);
  }

}
