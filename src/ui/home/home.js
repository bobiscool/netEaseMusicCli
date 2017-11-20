/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 15:49:33 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-20 11:21:24
 */
const blessed = require("blessed");
const chalk = require("chalk");
const Player = require("./player");
const Tab = require("./tab");
const FuncArea = require('./funcArea');
const { red,white,chalkRed,chalkWhite,black} = require('../../tool/colors');

function Home(screen, bus) {
  this.bus = bus;
  this.home = blessed.box({
    top: "5%",
    left: "30%",
    width: "50%",
    height: "90%",
    style: {
      bg: white
    }
  });
  this.tab = null;
  this.player = null;
  this.funcArea = null;
  screen.append(this.home);
}

Home.prototype = {
  init(screen) {
      this.tab = new Tab('我的音乐','音乐广场','音乐动态',this.bus,this.home,screen);
      this.player = new Player(screen,this.bus,this.home);
      this.funcArea = new FuncArea(screen,this.bus,this.home);
  }
};

module.exports = Home;
