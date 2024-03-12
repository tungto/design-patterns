// high level and low level should not depend on each other but abstraction
// abstraction should not depend on details
// details(concrete implementation) should depend on abstractions
interface MessageApi {
	connect: () => void;
	send: (id: number, message: string) => void;
}

// low level
class TelegramApi implements MessageApi {
	connect() {
		console.log('You are connected to Telegram API!');
	}

	send(targetId: number, message: string) {
		console.log(message + ' sent to ' + targetId + ' by Telegram!');
	}
}

class WhatsappApi implements MessageApi {
	connect() {
		console.log('You are connected to Whatsapp API!');
	}

	send(id: number, message: string) {
		console.log(message + ' sent to ' + id + ' by Whatsapp!');
	}
}

class SignalApi implements MessageApi {
	connect() {
		console.log('You are connected to Signal API!');
	}

	send(id: number, text: string) {
		console.log(text + ' sent to ' + id + ' by Signal!');
	}
}

// high level
class Messenger {
	private messageApi: MessageApi;
	constructor(api: MessageApi) {
		this.messageApi = api;
	}

	sendMessage(message: string, targetId: number) {
		this.messageApi.connect();
		this.messageApi.send(targetId, message);
	}
}

const signalApi = new SignalApi();

const messenger = new Messenger(signalApi);

messenger.sendMessage('heelo', 34);
