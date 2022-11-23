import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserprofileComponent } from './userprofile/userprofile.component';


const userRoutes: Routes = [
    {path:'home',component:UserhomeComponent},
    {path:'profile', component:UserprofileComponent},
    {path:'appointments', component:AppointmentsComponent}
];
@NgModule({
    imports: [RouterModule.forChild(userRoutes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
