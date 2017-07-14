var webduino = require('webduino-js');

var board, led, rgb;

// board = new webduino.WebArduino('10b3PjE4');

board = new webduino.WebArduino({
  device: '10b3PjE4'
});

// console.log('start');
// board.on('ready', function() {
//   console.log('ready');
//   led = new webduino.module.Led(board, board.getDigitalPin(10));
//   console.log('on')
//   led.on();
//   console.log('off')
//   led.off();

//   // board.systemReset();
//   // board.samplingInterval = 50;
//   // var rgbled = getRGBLedCathode(board, 15, 12, 13);
//   // rgbled.setColor('#009900');

// });

// var rgbled;


// boardReady({board: 'Smart', device: '10b3PjE4', transport: 'mqtt'}, function (board) {
//   board.systemReset();
//   board.samplingInterval = 50;
//   rgbled = getRGBLedCathode(board, 15, 12, 13);
//   rgbled.setColor('#ff0000');
// });

board.on(webduino.BoardEvent.READY, function () {
  console.log('ready')
  led = new webduino.module.Led(board, board.getDigitalPin(10));
  led.blink(500);

  setTimeout(function () {
    board.close();
  }, 5000);
});

board.on(webduino.BoardEvent.ERROR, function (err) {
  console.log('board error', err.message);
});

board.on(webduino.BoardEvent.BEFOREDISCONNECT, function () {
  console.log('board beforedisconnect');
});

board.on(webduino.BoardEvent.DISCONNECT, function () {
  console.log('board disconnect');
  // test: should not emit 'disconnect' again
  board.disconnect();
});