/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 15:49:33 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-16 16:10:21
 */
const blessed = require('blessed');
const chalk = require('chalk');



function startHome(screen){
    var homeBox = blessed.box({
        top:"center",
        left:"center",
        width:'50%',
        height:"90%",
        style:{
            bg:"white"
        }
    });
    var meBox = blessed.box({
        parent:homeBox,
        top:"10%",
        left:"26%",
        width:"16.5%",
        height:4,
        style:{
            bg:"red",
            fg:"white"
        }
    });

    var sequareBox = blessed.box({
        parent:homeBox,
        top:"10%",
        left:"42.5%",
        width:"16.5%",
        height:4,
        style:{
            bg:"red",
            fg:"white"
        }
    });

    var actiBox = blessed.box({
        parent:homeBox,
        top:"10%",
        left:"59%",
        width:"16.5%",
        height:4,
        style:{
            bg:"red",
            fg:"white"
        }
    });

   screen.append(homeBox);
   screen.append(meBox);
   screen.append(sequareBox);
   screen.append(actiBox);
}

module.exports = startHome;