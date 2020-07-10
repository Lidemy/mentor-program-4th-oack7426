const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});


function solve(num) {
  for (let i = 0; i < num.length; i += 1) {
    for (let ii = 0; ii < num[i]; ii += 1) {
      console.log('*'.repeat(ii + 1));
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
