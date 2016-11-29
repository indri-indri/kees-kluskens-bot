function randomElement (array) {
	return array[Math.floor(Math.random() * array.length)];
}

function getSwearReaction () {
	const go = [
		'rot ',
		'kk ',
		'tief ',
		'flikker ',
	];

	const just = [
		'gwn ',
		'gewoon ',
		'lekker ',
		'',
	];

	const distance = [
		'',
		'n eind ',
		'een eind ',
	];

	const man = [
		' joh',
		' gast',
		' man',
		'',
	];

	const separator = [
		', ',
		' ',
	];

	const disease = [
		'kk',
		'tyfus',
		'tering',
	];

	const space = [
		' ',
		'',
	];

	const person = [
		'joch',
		'jong',
		'kind',
		'debiel',
		'mongool',
		'mongooltje',
	];

	return randomElement(go) + randomElement(just) + randomElement(distance) + 'op' + randomElement(man) + randomElement(separator) + randomElement(disease) + randomElement(space) + randomElement(person);
}

module.exports = function (bot) {
	bot.onText(/^kees/i, msg => {
		let resp;

		if (msg.text.match(/moet/i)) {
			if (msg.text.match(/ik/i)) {
				if (Math.random() < .5) {
					resp = 'haha ja';
				} else {
					resp = 'ben je mal!';
				}
			} else {
				resp = 'ik moet helemaal niks!';
			}
		} else if (msg.text.match(/\b(kun|kan|wil)\b/i)) {
			resp = 'ik ben bezig met een webpack core meeting';
		} else {
			resp = Math.random() > .5 ? 'mavic pro' : getSwearReaction();
		}

		bot.sendMessage(msg.chat.id, resp);
	});
};
