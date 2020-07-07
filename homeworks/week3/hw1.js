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
/* eslint-enable */

function solve(num) {
  for (let i = 0; i < num.length; i += 1) {
    for (let ii = 0; ii < num[i]; ii += 1) {
      console.log('*'.repeat(ii + 1));
    }
  }
}
