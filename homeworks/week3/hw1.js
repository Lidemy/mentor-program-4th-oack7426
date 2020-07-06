
/* eslint-disable */
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})
/* eslint-disable */


function solve(lines) {
  for (let i = 0; i < lines.length; i++) {
    for (let ii = 0; ii < lines[i]; ii++) {
      console.log('*'.repeat(ii + 1));
    }
  }
}
