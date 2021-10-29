import { Utils } from "src/app/utils";
import { Order } from "../../interfaces/order.interface";
import { User } from "../../interfaces/user.interface";

export class FetchAllUsers {
	static readonly type = Utils.Helpers.Type('[Users: Fetch] Fetch all users');
	constructor() { }
}

export class FetchAllUsersSuccess {
	static readonly type = Utils.Helpers.Type('[Users: Fetch] Fetch all users success');
	constructor(public readonly payload: User[]) { }
}

export class FetchAllUsersFail {
	static readonly type = Utils.Helpers.Type('[Users: Fetch] Fetch all users fail');
	constructor(public readonly payload: any) { }
}

export class FetchUserOrders {
	static readonly type = Utils.Helpers.Type('[Orders: Fetch] Fetch user orders');
	constructor(public readonly payload: { id: string }) { }
}

export class FetchUserOrdersSuccess {
	static readonly type = Utils.Helpers.Type('[Orders: Fetch] Fetch user orders success');
	constructor(public readonly payload: Order[]) { }
}

export class FetchUserOrdersFail {
	static readonly type = Utils.Helpers.Type('[Orders: Fetch] Fetch user orders fail');
	constructor(public readonly payload: any) { }
}

