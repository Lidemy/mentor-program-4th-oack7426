// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。
function capitalize(str) {
  var array =[];
  var pattern = new RegExp("[A-Za-z]");
  array = str.split('');
  if(pattern.test(str[0])){
    array[0] = array[0].toUpperCase();

  }
  return array.join("");
  
}

console.log(capitalize('asf'));
