import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserhomeService } from './userhome.service';
 
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent implements OnInit {

  imgUrl!:string;
  coachArray!:any[]
  showcoach!:boolean
  constructor(private service:UserhomeService) {}
  

  ngOnInit() {
    this.allcoaches();
  }

  allcoaches(){
    this.service.allcoaches().subscribe({
      next: (data) => {if(data){
        this.coachArray = data;
        this.showcoach = true;
        if(this.coachArray[0].gender = "M"){
          this.imgUrl = '../../../assets/Images/male.png'
        }
        else if(this.coachArray[0].gender = "F"){
          this.imgUrl = '../../../assets/Imsges/female.png'
        }
      }}
    })
  }
}
