/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 14:25:07 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-17 17:05:20
 * add player 
 */


var blessed = require("blessed");
var chalk = require("chalk");
function Player(screen,bus,homeBox){
    var self = this;
    this.screen = screen;
    this.playing = false;
    this.basebox = blessed.box({
      parent:homeBox,
      bottom:0,
      left:'center',
      width:"100%",
      height:3,
      style: {
        bg: "red"
      }
    });
    this.playBtn = blessed.box({
        parent:self.basebox,
        bottom:1,
        left:'0',
        align:'center',
        valign:"middle",
        height:1,
        width:9,
        content:chalk.bold.white("play")+chalk.yellow("ing"),
        style:{
            bg: "red"            
        }
      });
    
      this.nextBtn = blessed.box({
        parent:self.basebox,
        bottom:1,
        left:9,
        align:'center',
        valign:"middle",
        height:1,
        width:8,
        content:chalk.bold.white("next"),
        border:{

        },
        style:{
            bg: "red"            
        }
      }); 
      
      this.playArea =  blessed.box({
        parent:self.basebox,
        bottom:2,
        left:19,
        align:'center',
        valign:"middle",
        height:1,
        width:8,
        content:chalk.bold.white("next"),
        style:{
            bg: "red"            
        }
      }); 
    this.playBtn.on('click',function(){
       self.togglePlay();
    });
} 


Player.prototype = {
    togglePlay(){
        if(this.playing){
            this.playBtn.setContent(chalk.bold.white("paus")+chalk.yellow("ed"))
        }else{
            this.playBtn.setContent(chalk.bold.white("play")+chalk.yellow("ing"))            
        }
        this.playing = !this.playing;
        this.screen.render();
    }
}

module.exports = Player;