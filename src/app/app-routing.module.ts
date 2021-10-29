import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersResolver } from './core/resolvers/users.resolver';

const routes: Routes =
  [
    { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    {
      path: 'users',
      loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
      resolve: [UsersResolver],
    },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
