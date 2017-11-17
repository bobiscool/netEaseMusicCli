/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 13:33:54 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-17 16:26:01
 * home tab 
 */
const blessed = require("blessed");
const chalk = require("chalk");
function Tab(a, b, c, bus, homeBox, screen) {
  var screen = screen;
  var self =this;
  this.screen = screen;
  this.tabText = [a, b, c];
  this.nowTab = 0;
  this.bus = bus;
  this.color = [0,0,0];
  this.aBox = blessed.box({
    parent: homeBox,
    top: "0",
    left: "0%",
    width: "34%",
    height: 3,
    content: chalk.white(a),
    style: {
      bg: "red",
      fg: "white"
    },
    align: "center",
    valign: "middle"
  });
  this.bBox = blessed.box({
    parent: homeBox,
    top: "0",
    left: "34%",
    width: "35%",
    height: 3,
    content: chalk.rgb(self.color[0], self.color[1], self.color[2])(b),
    style: {
      bg: "red",
      fg: "white"
    },
    align: "center",
    valign: "middle"
  });
  this.cBox = blessed.box({
    parent: homeBox,
    top: "0",
    right: 0,
    width: "34%",
    height: 3,
    content: chalk.rgb(self.color[0], self.color[1], self.color[2])(c),
    style: {
      bg: "red",
      fg: "white"
    },
    align: "center",
    valign: "middle"
  });
  var self = this;

  
  this.aBox.on("click", function() {
    self.nowTab = 0;  
    self.changeTab();
  });
  this.bBox.on("click", function() {
    self.nowTab = 1;  
    self.changeTab();
  });
  this.cBox.on("click", function() {
    self.nowTab = 2;  
    self.changeTab();
  });

  screen.on("keypress", function(ch, key) {
    if (key.name == "left") {
      if (self.nowTab >= 1) {
        self.nowTab--;
      } else {
        self.nowTab = 0;
      }
    }

    if (key.name == "right") {
      if (self.nowTab <= 1) {
        self.nowTab++;
      } else {
        self.nowTab = 2;
      }

    }
    self.changeTab();
  });
}

Tab.prototype = {
  changeTab() {
    var self = this;  
    this.aBox.setContent(
      this.nowTab == 0
        ? chalk.white(this.tabText[0])
        : chalk.rgb(self.color[0], self.color[1], self.color[2])(this.tabText[0])
    );
    this.bBox.setContent(
        this.nowTab == 1
        ? chalk.white(this.tabText[1])
        : chalk.rgb(self.color[0], self.color[1], self.color[2])(this.tabText[1])
    );
    this.cBox.setContent(
        this.nowTab == 2
        ? chalk.white(this.tabText[2])
        : chalk.rgb(self.color[0], self.color[1], self.color[2])(this.tabText[2])
    );
    this.screen.render();
  }
};

module.exports = Tab;
