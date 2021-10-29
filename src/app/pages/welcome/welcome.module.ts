import { HelpModule } from './../../help/help.module';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { TutorialModule } from 'src/app/tutorial/tutorial.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    TutorialModule,
    MatCardModule,
    HelpModule
  ]
})
export class WelcomeModule { }
