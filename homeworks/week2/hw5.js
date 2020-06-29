// join([1, 2, 3], '')，正確回傳值：123
// join(["a", "b", "c"], "!")，正確回傳值：a!b!c
// join(["a", 1, "b", 2, "c", 3], ',')，正確回傳值：a,1,b,2,c,3

// repeat('a', 5)，正確回傳值：aaaaa
// repeat('yoyo', 2)正確回傳值：yoyoyoyo
function join(arr, concatStr) {
  var str ="";
  var i = 0;
  while (i<arr.length){
    str += arr[i] ;
    i++;
    if(i<arr.length){
        str += concatStr;
    }
  }
  return str;
}

function repeat(str, times) {
    var string ="";
  for (var i =0;i<times;i++){
    string+=str;
  }
  return string;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
