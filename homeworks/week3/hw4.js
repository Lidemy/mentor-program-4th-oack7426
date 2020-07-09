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

function solve(lines) {
  var strRes = "";
  for (var i = lines[0].length - 1; i >= 0; i--) {
    strRes += lines[0][i];
  }
  if (strRes == lines[0]) {
    console.log('True');
  } else {
    console.log('False');
  }
}