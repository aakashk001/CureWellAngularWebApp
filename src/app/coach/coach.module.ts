import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoachRoutingModule } from './coach-routing.module';
import { CoachComponent } from './coach.component';
import { CoachhomeService } from './coachhome/coachhome.service';


@NgModule({
    imports: [
        CommonModule,
        CoachRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [CoachComponent],
    providers:[CoachhomeService]
})

export class CoachModule { }
