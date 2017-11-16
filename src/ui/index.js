var blessed = require("blessed");
var chalk = require("chalk");
var logo = require('./logo')
var screen = blessed.screen({
  smartCSR: true,
  fullUnicode: true
});



screen.title = "NetEase";

var logoBox = blessed.box({
  top: "center",
  left: "center",
  width: 33.5,
  height: 18,
  content: eval(logo),
  tags: true,
  style: {
    fg: "red",
    bg: "black",

    border: {
      fg: "#f0f0f0"
    },
    hover: {
      bg: "green"
    }
  }
});

// chalk.red(`网易${chalk.white('云')}音乐`)
var textBox = blessed.box({
    top: "center",
    left: "center",
    width: 25,
    height: 1,
    content:`${chalk.red.bold(`网易${chalk.white('云')}音乐`)}${chalk.whiteBright('--音乐的力量')}`,
})

// console.log(chalk.red(`网易${chalk.white('云')}音乐`))
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
    fg: "red",
    bg: "black",
    border: {
      fg: "#f0f0f0"
    },
    hover: {
      bg: "green"
    }
  }
});

screen.key(["escape", "q", "C-c"], function(ch, key) {
  return process.exit(0);
});

screen.append(box);
screen.append(logoBox);
screen.append(textBox);
screen.render();
