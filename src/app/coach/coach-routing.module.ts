import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachprofileComponent } from './coach-profile/coachprofile.component';
import { CoachhomeComponent } from './coachhome/coachhome.component';

const coachRoutes: Routes = [
{ path :'home' , component :CoachhomeComponent},
{path:'profile',component:CoachprofileComponent},
]
@NgModule({
    imports: [RouterModule.forChild(coachRoutes)],
    exports: [RouterModule]
})
export class CoachRoutingModule { }
