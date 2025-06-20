import { SwimBehavior } from './SwimBehavior';

export class CantSwim implements SwimBehavior {
	swim(): void {
		console.log('I cant swim');
	}
}
