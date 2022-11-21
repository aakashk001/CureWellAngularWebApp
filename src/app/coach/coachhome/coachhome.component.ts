import { Component, OnInit } from '@angular/core';
import { CoachhomeService } from './coachhome.service';

@Component({
  selector: 'app-coachhome',
  templateUrl: './coachhome.component.html',
  styleUrls: ['./coachhome.component.css']
})
export class CoachhomeComponent implements OnInit {

  constructor(private serive:CoachhomeService){}
  coachId!:string
  imgUrl!:string 
  scheduleDatails:any
  msg!:string 
  showcontent!:boolean

  ngOnInit() {
    this.schedules();
  }


  schedules(){
    this.serive.schedules().subscribe({
      next:data => {
        if(data.length >0){
          this.scheduleDatails = data;
          this.showcontent = true;
        }
        else{
          this.showcontent = false;
          this.msg = 'No planned schedules yet'
          this.imgUrl = '../../../assets/Images/Notepad_icon.svg.png'
          
        }
      }
    })
  }
}
