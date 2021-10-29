import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Navigate } from '@ngxs/router-plugin';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError, tap, filter, take } from 'rxjs/operators';
import { UsersState } from '../store/state/users.store';

@Injectable({
	providedIn: 'root'
})
export class OrdersGuard implements CanLoad {

	constructor(private store: Store) { }

	canLoad(): Observable<boolean> {
		return this.checkStore().pipe(
			switchMap((res) => of(res)),
			catchError(() => of(false))
		);
	}

	private checkStore(): Observable<boolean> {
		return this.store.select(UsersState.ordersLoaded).pipe(
			tap(loaded => {
				if (!loaded) this.store.dispatch(new Navigate(['/']));
			}),
			filter(loaded => loaded),
			take(1)
		);
	}
}
