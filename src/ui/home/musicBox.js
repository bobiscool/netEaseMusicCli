/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-20 19:12:11 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-23 10:32:48
 */

const blessed = require("blessed");
const chalk = require("chalk");
const { red,white,chalkRed,chalkWhite,black,yellow,deepRed,green} = require('../../tool/colors');

function MusicBox(screen,bus,home){
    var self = this;
    this.bus = bus;
    this.screen = screen;
    this.baseBox = blessed.box({
        parent:home,
        bottom:0,
        left:'center',
        width:"100%",
        content:"没有你",
        align:"center",
        valign:"middle",
        height:3,
        style: {
          fg:white,
          bg: red
        }
    });
    
    // this.mName = blessed.box({
    //     parent:self.baseBox,
    //     bottom:0,
    //     left:"center",
    //     content:"没有你",
    //     align:"center",
    //     valign:"middle",
    //     width:10,
    //     height:3,
    //     style: {
    //       fg:white,
    //       bg: red
    //     }
    // });


      
    // this.mLyrics = blessed.box({
    //     parent:self.baseBox,
    //     bottom:0,
    //     right:0,
    //     width:"10",
    //     height:3,
    //     style: {
    //       bg: red
    //     }
    // });
    
}    

module.exports = MusicBox;