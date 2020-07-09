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


function solve(num) {
    for (let i = 0;i<num.length;i+=1){
        var numList = num[i].split(" ");
        if ( Number( num[0]) != num.length-1){
        return
        }
        var rule = Number(numList[2]);
        switch (rule){
            case 1:
            if(numList[0] - numList[1] > 0){
                console.log('A');
            }else if (numList[0] - numList[1] == 0){
                console.log('DRAW');
            }else{
                console.log('B');
            }
            break;
            case -1:
            if(numList[0] - numList[1] > 0){
                console.log('B');
            }else if (numList[0] - numList[1] == 0){
                console.log('DRAW');
            }else{
            console.log('A');
            }
            break;
        }
    }
}
/* eslint-disable */