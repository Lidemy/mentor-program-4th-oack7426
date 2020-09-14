const request = new XMLHttpRequest();
request.open('GET', 'https://lidemy-book-store.herokuapp.com/books', true);
request.onload = function () {
  const data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    for (let i = 0; i < 10; i += 1) {
      console.log(data[i].name);
    }
  } else {
    console.log('error');
  }
};
request.send();
