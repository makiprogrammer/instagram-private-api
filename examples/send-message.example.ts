import 'dotenv/config';
import { IgApiClient } from '../src';

(async () => {
	const ig = new IgApiClient();
	ig.state.generateDevice(process.env.IG_USERNAME);
	// ig.state.proxyUrl = process.env.IG_PROXY;
	const auth = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
	// successfully logged in :-)

	const thread = ig.entity.directThread(['410583523']); // IG user id
	const result = await thread.broadcastText('Test #5');

	console.log(auth, thread, result);
})();
