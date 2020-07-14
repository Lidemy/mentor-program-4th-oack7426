const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function compare(a, b, aLen, bLen) {
  if (aLen.length > bLen.length) {
    console.log(a);
  } else if (aLen.length === bLen.length) {
    const numLen = aLen.length;
    for (let ii = 0; ii < numLen; ii += 1) {
      if (Number(aLen[ii]) > Number(bLen[ii])) {
        console.log(a);
        break;
      }
      if (Number(aLen[ii]) < Number(bLen[ii])) {
        console.log(b);
        break;
      }
    }
  } else {
    console.log(b);
  }
}
function solve(num) {
  for (let i = 1; i < num.length; i += 1) {
    const numList = num[i].split(' ');
    const numListA = numList[0];
    const numListB = numList[1];
    const rule = numList[2];
    if (numListA === numListB) {
      console.log('DRAW');
    }
    if (rule === '1') {
      compare('A', 'B', numListA, numListB);
    }
    if (rule === '-1') {
      compare('B', 'A', numListA, numListB);
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
