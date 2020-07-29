const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function solve(str) {
  let strRes = '';
  for (let i = str[0].length - 1; i >= 0; i -= 1) {
    strRes += str[0][i];
  }
  if (strRes === str[0]) {
    console.log('True');
  } else {
    console.log('False');
  }
}


rl.on('close', () => {
  solve(lines);
});
