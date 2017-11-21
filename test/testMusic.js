var player = require('player');
// console.log(Howl);
// var a = new Howl({
// src:["./1.mp3"]
// });

// a.play();
var play = new player('./1.mp3');
var n = 0;
play.on('play',function(data){
    console.log(data);
   })
 play.play(function(data){
  console.log(data);
})

