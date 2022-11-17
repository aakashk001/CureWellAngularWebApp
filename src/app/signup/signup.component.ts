import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private route:ActivatedRoute, private service :SignupService) { }

  role! :string ;
  signUpTitle!:string;
  signUpImg!:string;
  formDisplay! :boolean;
  errorMessage = "";
  userregisterForm!:FormGroup<any>;
  coachregisterForm!:FormGroup;
  userId!:string;
  coachId!:string;

  ngOnInit(): void {
    this.role  = this.route.snapshot.params['role'];
    if(this.role == "users"){
      this.formDisplay = true;
    }
    else{
      this.formDisplay = false;
    }
    this.userregisterForm = this.formbuilder.group({
      name:['',[Validators.minLength(3),Validators.maxLength(50)]],
      password:['',[Validators.maxLength(10),Validators.minLength(5)]],
      mobileNumber:['',Validators.pattern("^[0-9]{10}$")],
      email:['',Validators.required],
      dateOfBirth:[''],
      gender:['',[Validators.required]],
      pincode:['',[Validators.pattern("/^[0-9]{6}$")]],
      city:['',[Validators.minLength(6),Validators.maxLength(20)]],
      state:['',[Validators.minLength(6),Validators.maxLength(20)]],
      country:['',[Validators.minLength(6),Validators.maxLength(20)]]
    })
    console.log(this.userregisterForm.controls['name'].errors?.['maxlength']);
  }



  registerUser(form:FormGroup){
    // console.log(form.value.name);
    // console.log(form.value.password);
    // console.log(form.value.gender);
    // const users ={ "name" : form.value.name , "password":form.value.name ,"gender":form.value.gender,"dateOfBirth":form.value.dateOfBirth
    // }
    console.log(form.value);
    this.service.register(form.value).subscribe(response=>{if(response){
      alert(`New UserAdded with ID ${response.ID}`);
    }})
  }
}
