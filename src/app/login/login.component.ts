import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import constants from '../../assets/constant'
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   expotId!: string;
  imgSrc! :string;
  role!:string;
  loginTitle!:string;
  loginForm!:FormGroup;
  placeholder!:string;
  errorMessage!:string;

  constructor(private route:ActivatedRoute, private formbuilder:FormBuilder,private service:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.role = this.route.snapshot.params['role']
    console.log(this.role);
    if(this.role == "users"){
      console.log(this.role)
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
      Id: ['',Validators.required],
      password:['',[Validators.minLength(5),Validators.maxLength(10)]]
    })
  }

  login(form:FormGroup){
    localStorage.setItem('id',form.value.Id);
    this.service.login(this.role,form.value.Id).subscribe({
      next:(data)=>{
        console.log(data[0].password);
        if(data[0].password == form.value.password){
         if(this.role=="users"){
          this.router.navigate(['/user/home'])
         }
         else{
          this.router.navigate(['/coach/home'])
         }
        }
        else{
          this.errorMessage = constants.invalid;
        }
      }
    })
  }

}
