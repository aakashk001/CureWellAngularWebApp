import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const coachRoutes: Routes = [

];
@NgModule({
    imports: [RouterModule.forChild(coachRoutes)],
    exports: [RouterModule]
})
export class CoachRoutingModule { }
