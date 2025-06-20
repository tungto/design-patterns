import { SwimBehavior } from './SwimBehavior';

export class SwimWithLeg implements SwimBehavior {
	swim() {
		console.log('swim with legs!!');
	}
}
