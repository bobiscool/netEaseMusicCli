/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 17:57:26 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-20 11:34:27
 * 主要功能区域
 */

const blessed = require("blessed");
const chalk = require("chalk");
const { red,white,chalkRed,chalkWhite,black,yellow,deepRed,green} = require('../../tool/colors');

function FuncArea(screen,bus,home){
  var self =this;
  this.screen = screen;
  this.bus = bus;
  this.basebox = blessed.box({
    parent:home,
    bottom:3,
    height:"100%-6",
    style:{
       bg:white,
      

    }
  });

  this.list = blessed.list({
     parent:self.basebox, 
     keys:true,
     vi:true,
     left:2,
     top:2,
     mouse:true,
     items:['我的收藏','最近播放'],
     style:{
         bg:white,
         fg:black,
         padding:10,
         selected:{
            fg:deepRed,
            bg:white
         }
     }
  });

  this.bus.add('changeList',this,this.changeList);
}

FuncArea.prototype = {
    changeList(whitch){
        if(whitch.type = "tab"){
            //no api
        }
    }
}

module.exports = FuncArea;