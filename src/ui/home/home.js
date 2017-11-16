/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 15:49:33 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-16 16:39:38
 */
const blessed = require("blessed");
const chalk = require("chalk");

function startHome(screen) {
  var homeBox = blessed.box({
    top: "10%",
    left: "center",
    width: "50%",
    height: "90%",
    style: {
      bg: "white"
    }
  });
  var meBox = blessed.box({
    parent: homeBox,
    top: "10%",
    left: "26%",
    width: "17%",
    height: 3,
    content: "我的音乐",
    style: {
      bg: "red",
      fg: "white"
    },
    align: "center",
    valign: "middle",
    clickable: true
  });

  var sequareBox = blessed.box({
    parent: homeBox,
    top: "10%",
    left: "42%",
    width: "17%",
    content: chalk.rgb(123, 45, 67)("音乐广场"),
    height: 3,
    style: {
      bg: "red",
      fg: "white"
    },
    align: "center",
    valign: "middle"
  });

  var actiBox = blessed.box({
    parent: homeBox,
    top: "10%",
    left: "58.5%",
    width: "17%",
    height: 3,
    content: chalk.rgb(123, 45, 67)("音乐动态"),
    style: {
      bg: "red",
      fg: "white"
    },
    align: "center",
    valign: "middle"
  });

  screen.append(homeBox);
  screen.append(meBox);
  screen.append(sequareBox);
  screen.append(actiBox);

  meBox.on("click", function() {
    meBox.setContent(chalk.white("我的音乐"));
    sequareBox.setContent(chalk.rgb(123, 45, 67)("音乐广场"));
    actiBox.setContent(chalk.rgb(123, 45, 67)("音乐动态"));
    screen.render();
  });

  sequareBox.on("click", function() {
    sequareBox.setContent(chalk.white("音乐广场"));
    meBox.setContent(chalk.rgb(123, 45, 67)("我的音乐"));
    actiBox.setContent(chalk.rgb(123, 45, 67)("音乐动态"));
    screen.render();
  });

  actiBox.on("click", function() {
    actiBox.setContent(chalk.white("音乐动态"));
    sequareBox.setContent(chalk.rgb(123, 45, 67)("音乐广场"));
    meBox.setContent(chalk.rgb(123, 45, 67)("我的音乐"));
    screen.render();
  });
}

module.exports = startHome;
