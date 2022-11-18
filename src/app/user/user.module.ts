import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserRoutingModule } from './user-routing.module';
import { AppointmentsComponent } from './appointments/appointments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserhomeService } from './userhome/userhome.service';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    declarations: [UserComponent,UserhomeComponent,UserprofileComponent,AppointmentsComponent],
    providers: [UserhomeService]
})

export class UserModule { }
