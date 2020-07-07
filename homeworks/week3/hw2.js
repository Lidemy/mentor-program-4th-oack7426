/* eslint-disable */
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
    lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
    solve(lines)
})
/* eslint-disable */
// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
    var range = lines[0].split(" ");
    for (var i = Number(range[0]); i <= Number(range[1]); i++) {
        var math = 0;
        var numStr = (i + "");
        for (var ii = 0; ii < numStr.length; ii++) {
            math += Math.pow(Number(numStr[ii]), numStr.length);
        }
        if (math === i) {
            console.log(math);
        }
    }
}