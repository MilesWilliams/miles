import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import * as usersActions from '../actions/users.actions';
import { tap } from 'rxjs/operators';
import { User } from '../../interfaces/user.interface';
import { Order } from '../../interfaces/order.interface';
import { UsersService } from '../../services/users.service';
import { Utils } from 'src/app/utils';
import { Navigate } from '@ngxs/router-plugin';

export interface UsersStateModel {
	users: { [id: string]: User };
	orders: { [id: string]: Order };
	selected_user: string;
	loaded: boolean;
	loading: boolean;
	orders_loading: boolean;
	orders_loaded: boolean;
}

@State<UsersStateModel>({
	name: 'users',
	defaults: {
		users: {},
		orders: {},
		selected_user: null,
		loaded: false,
		loading: false,
		orders_loading: false,
		orders_loaded: false,
	}
})
@Injectable()
export class UsersState {

	constructor(
		private _usersSvc: UsersService
	) { }

	@Selector() static isLoading(state: UsersStateModel) { return state.loading };
	@Selector() static hasLoaded(state: UsersStateModel) { return state.loaded };
	@Selector() static getAllUsers(state: UsersStateModel) {
		const users = Utils.Helpers.FromHashMap(state.users);
		return users.sort(this.sort('name'))
	};
	@Selector() static ordersLoaded(state: UsersStateModel) { return state.loaded };
	@Selector() static getUsersOrders(state: UsersStateModel) { return Utils.Helpers.FromHashMap(state.orders) };

	@Action(usersActions.FetchAllUsers)
	fetchAllUsers(ctx: StateContext<UsersStateModel>, action: usersActions.FetchAllUsers) {
		ctx.patchState({
			loaded: false,
			loading: true
		});
		return this._usersSvc.getAllUsers().pipe(
			tap(
				(res: User[]) => ctx.dispatch(new usersActions.FetchAllUsersSuccess(res)),
				(err: any) => ctx.dispatch(new usersActions.FetchAllUsersFail(err))
			)
		);
	}

	@Action(usersActions.FetchAllUsersSuccess)
	fetchAllUsersSuccess(ctx: StateContext<UsersStateModel>, action: usersActions.FetchAllUsersSuccess) {
		const state = ctx.getState();
		const users = action.payload;

		ctx.patchState({
			loaded: true,
			loading: false,
			users: Utils.Helpers.ToHashMap<User>(users, state, 'id')
		});
	}

	@Action(usersActions.FetchAllUsersFail)
	fetchAllUsersFail(ctx: StateContext<UsersStateModel>, action: usersActions.FetchAllUsersFail) {
		ctx.patchState({
			loaded: false,
			loading: false,
		});
	}

	@Action(usersActions.FetchUserOrders)
	fetchUserOrders(ctx: StateContext<UsersStateModel>, action: usersActions.FetchUserOrders) {
		const { id } = action.payload;

		ctx.patchState({
			selected_user: id,
			orders_loading: true
		});

		return this._usersSvc.getUserOrdersByID(id).pipe(
			tap(
				(res) => ctx.dispatch(new usersActions.FetchUserOrdersSuccess(res)),
				(err: any) => ctx.dispatch(new usersActions.FetchUserOrdersFail(err))
			)
		);
	}

	@Action(usersActions.FetchUserOrdersSuccess)
	fetchUserOrdersByIDSuccess(ctx: StateContext<UsersStateModel>, action: usersActions.FetchUserOrdersSuccess) {
		const state = ctx.getState();
		const orders = action.payload;
		const url = `users/${state.selected_user}/orders`;

		ctx.patchState({
			orders: Utils.Helpers.ToHashMap<Order>(orders, state, 'id'),
			orders_loading: false,
			orders_loaded: true
		});

		return ctx.dispatch(new Navigate([url]))
	}

	static sort(property) {
		let sortOrder = 1;

		if (property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}

		return (a, b) => sortOrder === -1 ? b[property].localeCompare(a[property]) : a[property].localeCompare(b[property]);
	}
}