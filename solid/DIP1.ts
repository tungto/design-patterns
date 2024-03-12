/**
 * another example of DIP
 * https://alexnault.dev/dependency-inversion-principle-in-functional-typescript
 */

interface ClientApi {
	get();
	post();
}

class Axios {
	get() {}
	post() {}
}

class HttpClient {
	private axios;

	constructor() {
		this.axios = new Axios();
	}
	createUser() {
		return this.axios.post();
	}

	getUser() {
		return this.axios.get();
	}
}

const httpClient = new HttpClient(); // ! concrete instance

/**
 * This signup function depend on concrete instance http
 * @param email
 * @param password
 * @returns
 */
function signup(email: string, password: string) {
	const existingUser = httpClient.createUser();

	if (existingUser) {
		throw new Error('user existed');
	}

	return httpClient.createUser();
}
