require('webduino-blockly');

(async function () {

var rgbled;

boardReady({ board: 'Smart', device: '10b3PjE4', transport: 'mqtt' }, async function (board) {
  board.systemReset();
  board.samplingInterval = 50;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  for (var count = 0; count < 10; count++) {
    rgbled.setColor('#ff0000');
    await delay(0.5);
    rgbled.setColor('#3366ff');
    await delay(0.5);
    rgbled.setColor('#009900');
    await delay(0.5);
    rgbled.setColor('#ffcc33');
    await delay(0.5);
  }
  rgbled.setColor('#000000');
});

}());