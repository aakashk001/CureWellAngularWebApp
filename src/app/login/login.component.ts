import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import constants from '../../assets/constant'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imgSrc! :string;
  role!:string;
  loginTitle!:string;
  loginForm!:FormGroup;
  placeholder!:string;
  errorMessage!:string;

  constructor(private route:ActivatedRoute, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.role = this.route.snapshot.params['role']
    if(this.role == "users"){
      this.imgSrc = constants.userImg;
      this.loginTitle = constants.userLogin;
      this.placeholder = constants.userplaceholder;
    }
    else{
      this.imgSrc = constants.coachImg;
      this.loginTitle = constants.coachLogin;
      this.placeholder = constants.coachplaceholder;
    }

    this.loginForm = this.formbuilder.group({
      userId: ['',Validators.required],
      password:['',[Validators.minLength(5),Validators.maxLength(10)]]
    })
  }

}
