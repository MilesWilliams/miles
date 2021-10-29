import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { OverviewComponent } from './components/overview/overview.component';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  declarations: [UsersComponent, OverviewComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    UsersRoutingModule,
    LayoutModule
  ]
})
export class UsersModule { }
