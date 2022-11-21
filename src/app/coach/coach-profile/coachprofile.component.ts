import { Component, OnInit } from '@angular/core';
import { CoachprofileService } from './coachprofile.service';

@Component({
  selector: 'app-coachprofile',
  templateUrl: './coachprofile.component.html',
  styleUrls: ['./coachprofile.component.css']
})
export class CoachprofileComponent implements OnInit {

  constructor(private service :CoachprofileService) { }
  imgUrl! : string;
  id!:any;
  coacheDetails:any;
  
  ngOnInit(): void {
    // this.imgUrl = '../../../assets/Images/female.png';
  this.id = localStorage.getItem('id');
    this.service.ViewDetails(this.id).subscribe({
      next:data=> {if(data){
        this.coacheDetails = data;
        if(data[0].gender == "M"){
          this.imgUrl = '../../../assets/Images/male.png';
        }
        else{
          this.imgUrl = '../../../assets/Images/female.png';
        }
      }}
    })
  }
  

}
