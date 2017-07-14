require('webduino-blockly');

var led;


boardReady({ board: 'Smart', device: '10b3PjE4', transport: 'mqtt' }, function (board) {
  console.log('ready')
  board.systemReset();
  board.samplingInterval = 20;
  led = getLed(board, 4);
  led.off();

  // document.getElementById("demo-area-02-light").addEventListener("click", function(){
  //   if (document.getElementById("demo-area-02-light").className == "on") {
  //     document.getElementById("demo-area-02-light").className = "off";
  //     led.off();
  //   } else {
  //     document.getElementById("demo-area-02-light").className = "on";
  //     led.on();
  //   }
  // });


});