import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { FetchAllUsers } from '../store/actions/users.actions';
import { UsersState } from '../store/state/users.store';

@Injectable({
	providedIn: 'root'
})
export class UsersResolver implements Resolve<boolean> {
	constructor(private store: Store) { }

	resolve(): Observable<boolean> {
		return this.checkStore()
	}

	private checkStore(): Observable<boolean> {
		const hasLoaded = this.store.selectSnapshot(UsersState.hasLoaded);

		if (hasLoaded) return of(true);

		return this.store.dispatch([new FetchAllUsers()]);
	}
}