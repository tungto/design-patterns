import { FlyBehavior } from './FlyBehavior';

export class FlyRocketPowered implements FlyBehavior {
	fly(): void {
		console.log('I am flying with Rocket powered!!');
	}
}
