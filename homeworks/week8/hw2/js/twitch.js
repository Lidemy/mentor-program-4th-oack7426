/* eslint-disable */
const request = new XMLHttpRequest();
request.onload = function () {
  const require = request.responseText;
  const json = JSON.parse(require);
  const arrayJSON = json;
  console.log(arrayJSON);
  for (let i = 0; i < arrayJSON['top'].length; i += 1) {
    console.log(arrayJSON['top'][i]['game']['name']); // top 前五的遊戲名
    const gameName = arrayJSON['top'][i]['game']['name'];
    // gameName = gameName.replace(/\s*/g, "");
    console.log('https://api.twitch.tv/kraken/streams/?game=' + gameName);
  }
}

// request.open('GET', 'https://api.twitch.tv/kraken/streams/?game=League of Legends', true); //只取一個遊戲的所有實況
request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', true);
request.setRequestHeader('client-id', '0d2sum7hqlwdvah0sgn3o6ipjgi7vo');
request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
request.send();
/* eslint-enable */
