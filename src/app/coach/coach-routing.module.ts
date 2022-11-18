import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachhomeComponent } from './coachhome/coachhome.component';


const coachRoutes: Routes = [
{
    path: '', 
    component: CoachhomeComponent
}
]
@NgModule({
    imports: [RouterModule.forChild(coachRoutes)],
    exports: [RouterModule]
})
export class CoachRoutingModule { }
