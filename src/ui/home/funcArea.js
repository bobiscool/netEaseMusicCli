/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 17:57:26 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-23 11:10:30
 * 主要功能区域
 */

const blessed = require("blessed");
const chalk = require("chalk");
const http = require('http');
const querystring = require('querystring');
const { red,white,chalkRed,chalkWhite,black,yellow,deepRed,green} = require('../../tool/colors');
const { tabList } = require('../../tool/listLib');
const  MusicBox = require('./musicBox.js')
function FuncArea(screen,bus,home){
  var self =this;
  this.screen = screen;
  this.bus = bus;
  this.type=1;
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
     scrollable:true,
     items:tabList[1],
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

  this.list.on('select',function(item){
      genList(self.list,item);
      self.screen.render();
  })

  this.musicBox = new MusicBox(this.screen,this.bus,this.basebox);
  this.bus.add('changeList',this,this.changeList);
}

FuncArea.prototype = {
    changeList(whitch){
        if(whitch.type = "tab"){
            //no api
            this.list.clearItems();
            this.list.setItems(tabList[whitch.num]);
            this.type = whitch.num;
            this.list.focus();
            this.screen.render();  
        }
    }
}

module.exports = FuncArea;