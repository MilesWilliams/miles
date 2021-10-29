import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/interfaces/order.interface';
import { UsersState } from 'src/app/core/store/state/users.store';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  @Select(UsersState.getUsersOrders) orders$: Observable<Order[]>

  constructor() { }

  ngOnInit(): void {
  }

  public getColumnNames(order: Order) {
    return Object.keys(order).filter( k => k !== 'userId');
  }

}
