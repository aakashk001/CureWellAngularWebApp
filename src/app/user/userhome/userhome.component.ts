import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Form } from '@angular/forms';
import { tap } from 'rxjs';
import { UserhomeService } from './userhome.service';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent implements OnInit {

  imgUrl!:string;
  coachArray!:any[]
  userDetails:any;
  coachdetails:any;
  showcoach!:boolean;
  showbookingscreen!:boolean;
  successpage!:boolean;
  appointmentDetails!:any;
  appointmentForm!:FormGroup;
  date = new Date();
  data =  formatDate(new Date(), 'yyyy/MM/dd', 'en'); 
  constructor(private service:UserhomeService,private fb:FormBuilder) {}
  
  ngOnInit() {
    this.imgUrl = '../../../assets/Images/male.png'
    this.allcoaches();
    this.userDetails = localStorage.getItem('id');
    //Date validation is not done 
    this.appointmentForm = this.fb.group({
      appointmentDate : ['',[Validators.required]],
      slot : ['',[Validators.required]]
    })

  }

  confirmAppointment(fb:FormGroup){
    this.appointmentDetails = {"appointmentDate":fb.value.appointmentDate,
    "slot":fb.value.slot,
    "userId": this.userDetails,
    "coachId" :this.coachdetails
  }
  console.log(this.appointmentDetails);
  return this.service.confirmAppointment(this.appointmentDetails).subscribe({
    next :(data) =>{if(data.id!= null){
      console.log(data);
      this.successpage = true;
      this.showbookingscreen = false;
      this.showcoach = false;
    }}
  })
  }

  allcoaches(){
    this.service.allcoaches().subscribe({
      next: (data) => {if(data){
        this.coachArray = data;
        this.showcoach = true;}}
    })
  }

  bookAppointment(id:any){
    this.coachdetails = id;
    this.showbookingscreen = true;
    this.showcoach = false;
    this.successpage = false;
    console.log(this.userDetails);
  }
}
// function vaildateDate(fc:FormControl){
//   if()
// }
