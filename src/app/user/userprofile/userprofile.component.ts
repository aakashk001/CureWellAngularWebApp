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

  imgUrl!:string;
  userId!:any;
userDetails!:any;
  constructor(private serive :UserprofileService) { }
  
  ngOnInit(): void {
    this.imgUrl = constants.maleImg;
    this.userId = localStorage.getItem('id');
    this.viewDetails()
  }
viewDetails(){
  this.serive.viewDetails(this.userId).subscribe({
    next: data => {this.userDetails = data
    if(this.userDetails.gender == "F"){
      this.imgUrl = constants.femaleImg;
    }
    else{
      this.imgUrl = constants.maleImg;
    }
    }
  })
}

}
