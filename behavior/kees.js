function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getSwearReaction() {
  const go = ['rot ', 'kk ', 'tief ', 'flikker '];

  const just = ['gwn ', 'gewoon ', 'lekker ', ''];

  const distance = ['', 'n eind ', 'een eind '];

  const man = [' joh', ' gast', ' man', ''];

  const separator = [', ', ' '];

  const disease = ['kk', 'tyfus', 'tering', 'corona'];

  const space = [' ', ''];

  const person = ['joch', 'jong', 'kind', 'debiel', 'mongool', 'mongooltje'];

  return (
    randomElement(go) +
    randomElement(just) +
    randomElement(distance) +
    'op' +
    randomElement(man) +
    randomElement(separator) +
    randomElement(disease) +
    randomElement(space) +
    randomElement(person)
  );
}

module.exports = function (bot) {
  bot.onText(/^kees/i, (msg) => {
    let resp;

    if (msg.text.match(/moet/i)) {
      if (msg.text.match(/ik/i)) {
        if (Math.random() < 0.5) {
          resp = 'haha ja';
        } else {
          resp = 'ben je mal!';
        }
      } else {
        resp = 'ik moet helemaal niks!';
      }
    } else if (msg.text.match(/\b(kun|kan|wil)\b/i)) {
      resp = randomElement([
        'ik ben bezig met een orchestra meeting',
        'Ah balen wilde er vnv stoned naartoe',
        'is goed',
        'deal',
      ]);
    } else {
      const random = Math.random();

      if (random < 0.2) {
        resp = getSwearReaction();
      } else if (random < 0.25) {
        resp = '*mijn laser footage';
      } else {
        return;
      }
    }

    bot.sendMessage(msg.chat.id, resp);
  });
};
