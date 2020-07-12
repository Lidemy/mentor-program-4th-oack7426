const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(num) {
  for (let i = 1; i < num.length; i += 1) {
    const factor = [];
    for (let ii = 0; ii < num[i]; ii += 1) {
      if (num[i] % ii === 0) {
        factor.push(ii);
      }
    }
    if (factor.length >= 2) {
      console.log('Composite');
    } else if (factor.length === 0) {
      console.log('Composite');
    } else {
      console.log('Prime');
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
