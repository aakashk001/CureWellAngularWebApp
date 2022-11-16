import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private route:ActivatedRoute) { }

  role! :string ;
  signUpTitle!:string;
  signUpImg!:string;
  formDisplay! :boolean;
  errorMessage = "";
  userregisterForm!:FormGroup;
  coachregisterForm!:FormGroup;
  userId!:string;
  coachId!:string;

  ngOnInit(): void {
    this.role  = this.route.snapshot.params['role'];
    if(this.role == "users"){
      this.formDisplay = true;
    }
    this.userregisterForm = this.formbuilder.group({
      name :['',[Validators.maxLength(50),Validators.minLength(3)]],
      password:['',[Validators.maxLength(10),Validators.minLength(5)]],
      mobileNumber:['',Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      email:['',Validators.required],
      dateOfBirth:['',[Validators.min(20),Validators.max(100)]],
      gender:['',[Validators.required]],
      pincode:['',[Validators.pattern("/^[0-9]{6}$/gm")]],
      city:['',[Validators.minLength(6),Validators.maxLength(20)]],
      state:['',[Validators.minLength(6),Validators.maxLength(20)]],
      country:['',[Validators.minLength(6),Validators.maxLength(20)]]
    })
  }



}
