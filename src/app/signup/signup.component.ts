import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy, UrlHandlingStrategy } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private route:ActivatedRoute, private service :SignupService, private router:Router) { }

  role! :string ;
  signUpTitle!:string;
  signUpImg!:string;
  coachpage!:boolean;
  userpage!:boolean;
  errorMessage = "";
  userregisterForm!:FormGroup<any>;
  coachregisterForm!:FormGroup;
  userId!:string;
  coachId!:string;
  successpage!:boolean;

  ngOnInit(): void {
    
    this.role  = this.route.snapshot.params['role'];
    if(this.role == "users"){
      this.signUpImg = "../../assets/Images/UserLogIn.jpg";
      this.userpage = true;
    }
    else{
      this.coachpage = true;
      this.signUpImg = "../../assets/Images/LifeCoachLogIn.jpg";
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
    this.coachregisterForm = this.formbuilder.group({
      name:['',[Validators.maxLength(50),Validators.minLength(3)]],
      password:['',[Validators.maxLength(10),Validators.minLength(5)]],
      mobileNumber:['',Validators.pattern("^[0-9]{10}$")],
      dateOfBirth:[''],
      gender:['',[Validators.required]],
      speciality:['',[Validators.maxLength(50),Validators.minLength(10)]]
    })
  }
  coachregister(form:FormGroup){
    console.log(form.value);
    this.service.register(form.value,this.role).subscribe(response=>{if(response){
      this.coachId = JSON.stringify(response.id);
      this.successpage = true;
      this.coachpage = false;
      this.userpage = false;
    }})
  }
  registerUser(form:FormGroup){
    console.log(form.value);
    this.service.register(form.value,this.role).subscribe(response=>{if(response){
      this.userId = JSON.stringify(response.id);
      this.successpage = true;
      this.coachpage = false;
      this.userpage = false;
    }})
  }

  directLogin(){
    this.router.navigate(['/login',this.role])
  }
}
