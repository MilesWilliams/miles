import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    SearchBarComponent
  ]
})
export class LayoutModule { }
