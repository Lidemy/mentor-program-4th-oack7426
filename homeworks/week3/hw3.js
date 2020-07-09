/* eslint-disable */
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function () {
  solve(lines)
})
/* eslint-disable */

function solve(num) {
  for (let i = 1; i < num.length; i += 1) {
    let factor = [];
    for (let ii = 0; ii < num[i]; ii += 1) {
      if (num[i] % ii === 0) {
        factor.push(ii);
      }
    }
    if (factor.length >= 2) {
      console.log('Composite');
    } else if (factor.length == 0) {
      console.log('Composite');
    } else {
      console.log('Prime');
    }
  }
}

