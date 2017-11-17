/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 15:49:33 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-17 15:41:39
 */
const blessed = require("blessed");
const chalk = require("chalk");
const Player = require("./player");
const Tab = require("./tab");

function Home(screen, bus) {
  this.bus = bus;
  this.home = blessed.box({
    top: "5%",
    left: "center",
    width: "50%",
    height: "90%",
    style: {
      bg: "white"
    }
  });
  this.tab = null;
  this.player = null;
  screen.append(this.home);
}

Home.prototype = {
  init(screen) {
      this.tab = new Tab('我的音乐','音乐广场','音乐动态',this.bus,this.home,screen);
      this.player = new Player(screen,this.bus,this.home);
  }
};

module.exports = Home;
