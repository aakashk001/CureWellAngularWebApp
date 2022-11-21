import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import { CoachhomeService } from './coachhome/coachhome.service';
import { NgifTestComponent } from './ngif-test/ngif-test.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoachhomeComponent } from './coachhome/coachhome.component';
import { CoachprofileComponent } from './coach-profile/coachprofile.component';
import { LoginComponent } from '../login/login.component';


@NgModule({
    imports: [
        CommonModule,
        CoachRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [CoachComponent, CoachhomeComponent,CoachprofileComponent],
    providers:[CoachhomeService,LoginComponent]
})

export class CoachModule { }
