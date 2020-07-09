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

function solve(fun) {
  const range = fun[0].split(' ');
  for (let i = Number(range[0]); i <= Number(range[1]); i += 1) {
    let math = 0;
    const numStr = String(i);
    for (let ii = 0; ii < numStr.length; ii += 1) {
      math += Number(numStr[ii]) ** Number(numStr.length);
    }
    if (math === i) {
      console.log(math);
    }
  }
}
