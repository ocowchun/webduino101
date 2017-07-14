require('webduino-blockly');

var photocell;

boardReady({ board: 'Smart', device: '10b3PjE4', transport: 'mqtt' }, function(
  board
) {
  console.log('ready')

  board.systemReset();
  board.samplingInterval = 50;
  photocell = getPhotocell(board, 0);
  photocell.on(function(val) {
    photocell.detectedVal = val;
    console.log(photocell.detectedVal);
    // document.getElementById("demo-area-01-show").innerHTML = photocell.detectedVal;
  });
});
