require('webduino-blockly');

var rgbled;

var colors = { red: '#ff0000', blue: '#3333ff', green: '#009900' };
var currentColor = 'red';

boardReady({ board: 'Smart', device: '10b3PjE4', transport: 'mqtt' }, function(
  board
) {
  console.log('ready');
  board.systemReset();
  board.samplingInterval = 50;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  rgbled.setColor(colors.blue);
  console.log('start rotate')
  // rotateColor();
});

function rotateColor() {
  setInterval(function() {
    if (currentColor === 'red') {
      currentColor = 'blue';
    } else if (currentColor === 'blue') {
      currentColor = 'green';
    } else if (currentColor === 'green') {
      currentColor = 'red';
    }
    rgbled.setColor(colors.currentColor);
  }, 1000);
}
