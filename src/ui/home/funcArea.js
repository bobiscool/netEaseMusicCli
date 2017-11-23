/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 17:57:26 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-23 10:35:27
 * 主要功能区域
 */

const blessed = require("blessed");
const chalk = require("chalk");
const { red,white,chalkRed,chalkWhite,black,yellow,deepRed,green} = require('../../tool/colors');
const { tabList } = require('../../tool/listLib');
const  MusicBox = require('./musicBox.js')
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
     height:"100%-3",
     mouse:true,
     items:tabList[0],
     style:{
         bg:white,
         fg:black,
         padding:10,
         selected:{
            fg:deepRed,
            bg:white
         }
     },
     
  });

  this.musicBox = new MusicBox(this.screen,this.bus,this.basebox);
  this.bus.add('changeList',this,this.changeList);
}

FuncArea.prototype = {
    changeList(whitch){
        if(whitch.type = "tab"){
            //no api
            this.list.clearItems();
            this.list.setItems(tabList[whitch.num]);
            this.list.focus();
            this.screen.render();  
        }
    }
}

module.exports = FuncArea;