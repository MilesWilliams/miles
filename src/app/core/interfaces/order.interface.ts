export interface Order {
	id: string;
	userId: string;
	createdAt: string;
	product_name: string;
	price: string;
	paid: boolean;
	product_type: string;
}