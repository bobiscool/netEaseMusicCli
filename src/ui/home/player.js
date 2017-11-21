/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-17 14:25:07 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-21 11:00:00
 * add player 
 */


var blessed = require("blessed");
var chalk = require("chalk");
const { red,white,chalkRed,chalkWhite,black,yellow} = require('../../tool/colors');


function Player(screen,bus,homeBox){
    var self = this;
    this.screen = screen;
    this.playing = false;
    this.like = false;
    this.basebox = blessed.box({
      parent:homeBox,
      bottom:0,
      left:'center',
      width:"100%",
      height:3,
      style: {
        bg: red
      }
    });
    this.playBtn = blessed.list({
        parent:self.basebox,
        bottom:1,
        left:"center",
        align:'center',
        valign:"middle",
        height:1,
        width:9,
        content:chalk.bold.hex(white)("play")+chalk.hex(yellow)("ing"),
        style:{
            bg: red            
        }
      });
    
      this.nextBtn = blessed.box({
        parent:self.basebox,
        bottom:1,
        left:0,
        align:'center',
        valign:"middle",
        height:1,
        width:8,
        content:chalk.bold.hex(white)("next"),
        style:{
            bg:red
        }
      }); 
      
      this.likeIt = blessed.box({
        parent:self.basebox,
        bottom:1,
        right:0,
        align:'center',
        valign:"middle",
        height:1,
        width:8,
        content:chalk.bold.hex(white)("like"),
        style:{
            bg: red            
        }
      });
    //   this.playArea =  blessed.box({
    //     parent:self.basebox,
    //     bottom:1,
    //     left:19,
    //     align:'center',
    //     valign:"middle",
    //     height:1,
    //     width:8,
    //     content:chalk.bold.hex(white)("没有你"),
    //     style:{
    //         bg: red            
    //     }
    //   }); 
    this.playBtn.on('click',function(){
       self.togglePlay();
    });

    this.likeIt.on('click',function(){
       self.toggleLike();
    });
} 


Player.prototype = {
    togglePlay(){
        if(this.playing){
            this.playBtn.setContent(chalk.bold.hex(white)("paus")+chalk.hex(yellow)("ed"))
        }else{
            this.playBtn.setContent(chalk.bold.hex(white)("play")+chalk.hex(yellow)("ing"))            
        }
        this.playing = !this.playing;
        this.screen.render();
    },
    toggleLike(){
        if(this.like){
            this.likeIt.setContent(chalk.bold.hex(white)("paus")+chalk.hex(yellow)("ed"))
        }else{
            this.likeIt.setContent(chalk.bold.hex(white)("play")+chalk.hex(yellow)("ing"))            
        }
        this.playing = !this.playing;
        this.screen.render();
    }
}

module.exports = Player;