require('webduino-blockly');
var chars = require('./chars.js');
var dic = chars.dic;
var matrix;

boardReady({ board: 'Smart', device: '10b3PjE4', transport: 'mqtt' }, function(
  board
) {
  console.log('ready');
  board.systemReset();
  board.samplingInterval = 500;
  matrix = getMax7219(board, 0, 2, 4);
  matrix.animateStop();
  matrix.animateStop();
  var message = 'hello'.toUpperCase();
  console.log(message);

  var varData = message.split('').map(function(char) {
    return dic[char];
  });
  console.log(varData);
  matrix.animate(max7219_horse('left', varData.join('')), 100);
});

function stop(matrix) {
  matrix.animateStop();
  matrix.off();
}
