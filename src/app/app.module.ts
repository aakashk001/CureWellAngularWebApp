import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import {CoachprofileComponent} from './coach/coach-profile/coachprofile.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CoachModule } from './coach/coach.module';
import { UserModule } from './user/user.module';
import { LoginService } from './login/login.service';
import { SignupService } from './signup/signup.service';
import { CoachRoutingModule } from './coach/coach-routing.module';
import { CommonModule } from '@angular/common'; 
import { CoachComponent } from './coach/coach.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,
    CoachModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
