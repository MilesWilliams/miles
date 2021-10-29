import { FlexLayoutModule } from '@angular/flex-layout';
import { HelpComponent } from './help.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatDialogModule } from '@angular/material/dialog';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';

@NgModule({
  declarations: [HelpComponent, HelpDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  exports: [
    HelpComponent
  ]
})
export class HelpModule { }
