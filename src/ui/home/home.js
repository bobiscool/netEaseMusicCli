/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 15:49:33 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-17 11:10:00
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

  var tabText = ["我的音乐", "音乐广场", "音乐动态"];
  var nowTab = 0;

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
    changeTab(0);
  });
  sequareBox.on("click", function() {
    changeTab(1);
  });
  actiBox.on("click", function() {
    changeTab(2);
  });

  screen.on("keypress", function(ch, key) {
    if (key.name == "left") {
      if (nowTab >= 1) {
        nowTab--;
      } else {
        nowTab = 0;
      }

      changeTab(nowTab);
    }

    if (key.name == "right") {
        if (nowTab <= 1) {
          nowTab++;
        } else {
          nowTab = 2;
        }
  
        changeTab(nowTab);
      }
  });

  function changeTab(who) {
    nowTab = who;
    meBox.setContent(
      who == 0 ? chalk.white(tabText[0]) : chalk.rgb(123, 45, 67)(tabText[0])
    );
    sequareBox.setContent(
      who == 1 ? chalk.white(tabText[1]) : chalk.rgb(123, 45, 67)(tabText[1])
    );
    actiBox.setContent(
      who == 2 ? chalk.white(tabText[2]) : chalk.rgb(123, 45, 67)(tabText[2])
    );
    screen.render();
  }
}

module.exports = startHome;
