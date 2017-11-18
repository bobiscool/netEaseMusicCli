/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 17:57:26 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-18 19:36:08
 * 主要功能区域
 */

const blessed = require("blessed");
const chalk = require("chalk");
const { red,white,chalkRed,chalkWhite,black,yellow} = require('../../tool/colors');

function funcArea(screen,bus,home){
  var self =this;
  this.screen = screen;
  this.basebox = blessed.box({
    parent:home,
    bottom:3,
    height:20
  });
}