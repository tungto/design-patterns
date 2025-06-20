export enum SIZES {
	tall = 'tall',
	grande = 'grande',
	venti = 'venti',
}

export abstract class Beverage {
	protected description = 'Unknown Beverage';
	protected size = SIZES.tall;

	setSize(size: SIZES) {
		this.size = size;
	}
	getSize(): SIZES {
		return this.size;
	}

	getDescription(): string {
		return this.description;
	}

	abstract cost(): number;
}
