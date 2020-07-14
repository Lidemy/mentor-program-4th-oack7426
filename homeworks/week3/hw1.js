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
    for (let j = 0; j < num[i]; j += 1) {
      console.log('*'.repeat(j + 1));
    }
  }
}


rl.on('close', () => {
  solve(lines);
});
