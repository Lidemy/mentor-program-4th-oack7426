
/* eslint-disable */
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});
rl.on('line', function (line) {
  lines.push(line);
});
rl.on('close', function () {
  solve(lines);
})
/* eslint-disable */

const lines = [];

function solve(lines) {
  for (let i = 0; i < lines.length; i++) {
    for (let ii = 0; ii < lines[i]; ii++) {
      console.log('*'.repeat(ii + 1));
    }
  }
}
