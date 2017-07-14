var chars = require('./chars.js');
var dic = chars.dic;
// console.log(dic)


// var result = "HELLO".split('').map(function(char){return dic[char]});
// console.log(result)

//   var message = 'hello'.toUpperCase();
  var message = 'hello'.toUpperCase();
  var varData = message.split('').map(function(char){return dic[char]});
  console.log(varData)