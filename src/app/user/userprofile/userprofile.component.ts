import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { UserprofileService } from './userprofile.service';
import constants from '../../../assets/constant';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  constructor() { }
  
  ngOnInit(): void {
  }


}
