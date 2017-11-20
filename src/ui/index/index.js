
var blessed = require("blessed");
var chalk = require("chalk");
var logo = require("./logo");
var Home = require('../home/home');
var Bus = require('../../tool/eventBus');
var { red,white,chalkRed,chalkWhite,black,deepRed} = require('../../tool/colors');
var screen = blessed.screen({
  smartCSR: true,
  fullUnicode: true,// chinese,
  debug:true
});
// const red = "#B92500";
// const white = "#ffffff";
// const black = "#000000";
// const chalkWhite = [255,255,255];
// const chalkRed = [185,37,0];
var Home;
screen.title = "NetEase";
var bus = new Bus();
// background box
var box = blessed.box({
  top: "center",
  left: "center",
  width: "100%",
  height: "100%",
  content: "",
  tags: true,
  border: {
    type: "line"
  },
  style: {
    fg: red,
    bg: black,
    border: {
      fg: black
    }
  }
});

// logo
var logoBox = blessed.box({
  parent:box,
  top: "center",
  left: "center",
  width: 33.5,
  height: 18,
  content: eval(logo),
  tags: true,
  style: {
    fg: red,
    bg: black,
    border: {
      fg: "#f0f0f0"
    }
  }
});

//title
var textBox = blessed.box({
  parent:box,
  top: "85%",
  left: "center",
  width: 25,
  height: 1,
  content: `${chalk.hex(red).bold(`网易${chalk.hex(white)("云")}音乐`)}${chalk.hex(white)(
    "--音乐的力量"
  )}`,
  style: {
    bg: "black"
  }
});


screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});





// var logger = blessed.log({
//   parent: screen,
//   top: '0',
//   left: '0',
//   width: '25%',
//   height: '100%',
//   border: 'line',
//   tags: true,
//   keys: true,
//   vi: true,
//   mouse: true,
//   scrollback: 100,
//   scrollbar: {
//     ch: ' ',
//     track: {
//       bg: 'yellow'
//     },
//     style: {
//       inverse: true
//     }
//   }
// });


screen.append(box);
screen.append(logoBox);
screen.append(textBox);
screen.append(logger);

setTimeout(function(){
    logoBox.hide();
    textBox.hide();
    Home = new Home(screen,bus);
    Home.init(screen);
    screen.render();
},2000)

screen.render();
