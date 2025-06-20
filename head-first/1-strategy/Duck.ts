import { FlyBehavior } from './FlyBehavior';
import { SwimBehavior } from './SwimBehavior';
export abstract class Duck {
	flyBehavior: FlyBehavior;
	swimBehavior: SwimBehavior;
	constructor(flyBehavior: FlyBehavior, swimBehavior: SwimBehavior) {
		this.flyBehavior = flyBehavior;
		this.swimBehavior = swimBehavior;
	}

	setFlyBehavior(flyBehavior: FlyBehavior) {
		this.flyBehavior = flyBehavior;
	}

	setSwimBehavior(swimBehavior: SwimBehavior) {
		this.swimBehavior = swimBehavior;
	}

	abstract display(): void;

	performFly() {
		this.flyBehavior.fly();
	}

	performSwim() {
		this.swimBehavior.swim();
	}
}
