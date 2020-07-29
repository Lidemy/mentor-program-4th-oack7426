const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

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


rl.on('close', () => {
  solve(lines);
});
