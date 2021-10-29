import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { FetchUserOrders } from 'src/app/core/store/actions/users.actions';
import { UsersState } from 'src/app/core/store/state/users.store';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Select(UsersState.getAllUsers) users$: Observable<User[]>;
  private filterQuery: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public onUserSelect(id: string) {
    this.store.dispatch(new FetchUserOrders({ id }))
  }

  public onFilter(query: string) {
    this.filterQuery = query;
  }

  public filterUsers(users: User[]) {
    if (this.filterQuery === '') return users;

    return users.filter((u) => u.name.toLowerCase().includes(this.filterQuery) || u.lastName.toLowerCase().includes(this.filterQuery));
  }

}
