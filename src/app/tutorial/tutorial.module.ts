import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { Step4Component } from './step4/step4.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    Step1Component, Step2Component, Step3Component, Step4Component
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule

  ],

  exports: [
    Step1Component, Step2Component, Step3Component, Step4Component
  ]
})
export class TutorialModule { }
