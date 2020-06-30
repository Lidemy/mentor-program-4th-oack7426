// 現在請寫出一個函式來「印出」所有的因數
function printFactor(n) {
var arrayNum =[];
  for(var i =0 ;i<=n ;i++){
      if (n%i ==0){
        arrayNum.push(i);
      }
  }
  console.log(arrayNum.join('\n'));
}

printFactor(10);



