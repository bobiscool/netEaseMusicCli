/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 14:25:07 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-17 15:48:55
 * add player 
 */


var blessed = require("blessed");
var chalk = require("chalk");
function Player(screen,bus,homeBox){
    var self = this;
    this.screen = screen;
    this.basebox = blessed.box({
      parent:homeBox,
      bottom:1,
      left:'center',
      width:"50%",
      height:3,
      style: {
        bg: "red"
      }
    });
    this.playBtn = blessed.box({
        parent:self.basebox,
        bottom:1,
        left:'center',
        align:'center',
        valign:"middle",
        height:3,
        width:8,
        content:chalk.bold.white("play")+chalk.blue("ing"),
        style:{
            bg: "red"            
        }
      });
      
      
    this.screen.append(this.basebox);
    this.screen.append(this.playBtn);
} 


module.exports = Player;