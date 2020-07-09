/* eslint-disable */
// TODO:卡關先coommit回去再想
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

function solve(lines) {
  for (let i = 0; i < lines.length; i += 1) {
    let factor = [];
    for (let ii = 2; ii < lines[i]; ii += 1) {
      if (lines[i] % ii === 0) {
        factor.push(ii);
      }
    }
    if (factor.length == 0) {
      console.log('Prime');
    } else {
      console.log('Composite');
    }
  }
}
/* eslint-enable */
