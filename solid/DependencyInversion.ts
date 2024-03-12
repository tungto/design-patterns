/**
 * 1. high level and low level modules should depend on abstraction
 * rather than high-level depend on low-level
 * 2. interface (abstraction) shouldn't depend on details, vs versa
 * 3. Classes communicate with each other through interface not implementation
 */

//* order service:
// order should depend on order abstraction
// sql should depend on sql abstraction
// order communicate with sql through interface: order interface and sql interface

class Order {}

interface Database {
	create(order: Order): void;
	update(order: Order): void;
}

class OrderService {
	database: Database;

	public create(order: Order): void {
		this.database.create(order);
	}

	public update(order: Order): void {
		this.database.update(order);
	}
}

class MySQLDatabase implements Database {
	public create(order: Order) {
		// create and insert to database
	}

	public update(order: Order) {
		// update database
	}
}
