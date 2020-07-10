const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
  lines.push(line);
});

function compare(a, b, Alen, Blen) {
  if (Alen.length > Blen.length) {
    console.log(a);
  } else if (Alen.length === Blen.length) {
    const numLen = Alen.length;
    for (let ii = 0; ii < numLen; ii += 1) {
      if (Number(Alen[ii]) > Number(Blen[ii])) {
        console.log(a);
        break;
      }
      if (Number(Alen[ii]) < Number(Blen[ii])) {
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


    switch (rule) {
      case '1':
        compare('A', 'B', numListA, numListB);
        break;
      case '-1':
        compare('B', 'A', numListA, numListB);
        break;
      default:
        return;
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
