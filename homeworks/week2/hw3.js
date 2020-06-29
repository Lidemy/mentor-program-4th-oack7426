// TODO: 未完成
// 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）

// reverse('yoyoyo')
// 正確輸出：oyoyoy

// reverse('1abc2')
// 正確輸出：2cba1

// reverse('1,2,3,2,1')
// 正確輸出：1,2,3,2,1
function reverse(str) {
    var array = [];
    var arrayReverse = [];
    array = str.split("");
    for(var i = 5 ;  i < 0 ; i--){
        console.log(i);
        arrayReverse.push(array[i]);
    }
    console.log(arrayReverse);
}

reverse('hello');
