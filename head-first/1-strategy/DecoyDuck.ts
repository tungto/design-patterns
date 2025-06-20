import { Duck } from './Duck';
import { FlyNoway } from './FlyNoWay';
import { SwimWithLeg } from './SwimWithLegs';

export class DecoyDuck extends Duck {
	constructor() {
		super(new FlyNoway(), new SwimWithLeg());
	}
	display(): void {
		this.performFly();
		this.performSwim();
	}
}
