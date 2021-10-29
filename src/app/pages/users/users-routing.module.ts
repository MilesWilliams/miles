import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersGuard } from 'src/app/core/guards/orders.guard';
import { OverviewComponent } from './components/overview/overview.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent,
        children: [
            {
                path: '',
                component: UsersComponent
            },
            {
                path: ':id/orders',
                loadChildren: () => import('../orders/orders.module').then(m => m.OrdersModule),
                canLoad: [OrdersGuard]
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }