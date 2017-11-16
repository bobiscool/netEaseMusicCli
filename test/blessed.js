var blessed = require('blessed');
var chalk = require('chalk');
var screen = blessed.screen({
   smartCSR:true
});
var logo = `
..@@@@@@@@@@@@@@@@@@@@@@@@@....  
..@@@@@@@@@@@@@@@@@@@@@@@@@@@.. 
.@@@@@@@@@@@@@@@@.....@@@@@@@@. 
@@@@@@@@@@@...... .....@@@@@@@@ 
@@@@@@@@......@....@@@@@@@@@@@@ 
@@@@@@@....@@@.........@@@@@@@@ 
@@@@@@...@@@.............@@@@@@ 
@@@@@...@@@....@@...@@...=@@@@@ 
@@@@@...@@@....@@....@@...@@@@@ 
@@@@@....@@@.......@@@@...@@@@@ 
@@@@@@...@@@@@..@@@@@@...@@@@@@ 
@@@@@@@.....@@@@@@@@.....@@@@@@ 
@@@@@@@@@..............@@@@@@@@ 
.@@@@@@@@@@@@......@@@@@@@@@@@@ 
...@@@@@@@@@@@@@@@@@@@@@@@@@@.. `;

function addChalk(text) {
    let temText = "";
    let textNotat = "";
    for (var i in text) {
      if (text[i] != "@") {
        temText += `${i==0?'':'+'}chalk.white('${text[i]}')`;
      }
      if(text[i] == "@"){
          temText +=`${i==0?'':'+'}'@'`
      }
    }
     temText = 'chalk.red('+temText+')'
    return temText;
  }
  
  function genLogo() {
    var logoTextArray = logo.split("\n"); 
    var logoTextArrayWrapChalk = []
  logoTextArray.forEach(function(item, index) {
    logoTextArrayWrapChalk.push(addChalk(item));
  });
//   console.log(title)
   return logoTextArrayWrapChalk.join("+'\\n'+");
  }
  
// console.log(eval(genLogo()));

screen.title = "NetEase";

var box = blessed.box({
   top:'center',
   left:"center",
   width:'50%',
   height:'50%',
   content:eval(genLogo()),
   tags:true,
   border:{
       type:'line'
   },
   style:{
       fg:'red',
       bg:'black',
       border:{
           fg:'#f0f0f0'
       },
       hover:{
           bg:'green'
       }
   }
});


var icon = blessed.image({
   parent:box,
   top: 0,
   left: 0,
   type: 'overlay',
   width:'shrink',
   height:'shrink',
   file:'./1.png',
   search:false
});

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
  });
  
screen.append(box);

screen.render();