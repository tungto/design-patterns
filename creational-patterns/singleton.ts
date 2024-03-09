class Singleton {
	private static instance: Singleton;
	private constructor() {}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

function clientCode() {
	const s1 = Singleton.getInstance();
	const s2 = Singleton.getInstance();

	if (s1 === s2) {
		console.log('Singleton work, both variable contain same value');
	} else {
		console.log('singleton failed, variables contain different instance');
	}
}

clientCode();
