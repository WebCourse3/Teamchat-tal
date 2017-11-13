import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from '../user/userDitails';

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

  submit(){//שם אחר לסרוויס
    service.login(this.newUser);
  }

}
