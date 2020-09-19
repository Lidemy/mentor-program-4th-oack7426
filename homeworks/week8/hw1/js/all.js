const request = new XMLHttpRequest();
function requestStatus() {
  if (request.status >= 200 && request.status < 400) {
    for (let i = 0; i < document.querySelectorAll('section').length; i += 1) {
      document.querySelectorAll('section')[i].style = 'display:none';
    }
    const require = request.responseText;
    const json = JSON.parse(require);
    const arrayJSON = json;
    switch (arrayJSON.prize) {
      case 'FIRST':
        document.getElementById('first-result').style = 'display:block';
        break;
      case 'SECOND':
        document.getElementById('second-result').style = 'display:block';
        break;
      case 'THIRD':
        document.getElementById('third-result').style = 'display:block';
        break;
      case 'NONE':
        document.getElementById('none-result').style = 'display:block';
        break;
      default:
        /* eslint-disable */
        alert('系統不穩定，請再試一次');
        /* eslint-enable */
        document.getElementById('lottery').style = 'display:block';
        break;
    }
  } else {
    /* eslint-disable */
    alert('系統不穩定，請再試一次');
    /* eslint-enable */
  }
}
function result() {
  request.onload = requestStatus;
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery');
  request.send();
}


for (let j = 0; j < document.querySelectorAll('.is-btn').length; j += 1) {
  document.querySelectorAll('.is-btn')[j].addEventListener('click', result);
}
