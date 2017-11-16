
/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-15 17:18:13 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-16 10:39:45
 * 
 */

var chalk = require("chalk");
var chalkAnimation = require('chalk-animation');
const ansi = require('ansi-escape-sequences')
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

const title = `

 /$$   /$$             /$$     /$$$$$$$$                              
| $$$ | $$            | $$    | $$_____/                              
| $$$$| $$  /$$$$$$  /$$$$$$  | $$        /$$$$$$   /$$$$$$$  /$$$$$$ 
| $$ $$ $$ /$$__  $$|_  $$_/  | $$$$$    |____  $$ /$$_____/ /$$__  $$
| $$  $$$$| $$$$$$$$  | $$    | $$__/     /$$$$$$$|  $$$$$$ | $$$$$$$$
| $$\\  $$$| $$_____/  | $$ /$$| $$       /$$__  $$ \\____  $$| $$_____/
| $$ \\  $$|  $$$$$$$  |  $$$$/| $$$$$$$$|  $$$$$$$ /$$$$$$$/|  $$$$$$$
|__/  \\__/ \\_______/   \\___/  |________/ \\_______/|_______/  \\_______/
                                                                      
`;

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
   temText = 'chalk.red('+temText+');'
  return temText;
}

function genLogo() {
  var logoTextArray = logo.split("\n"); 
logoTextArray.forEach(function(item, index) {
    console.log(eval(addChalk(item)));
});
console.log(title)
}


// genLogo();

const welcome = chalkAnimation.rainbow('Welcome to NetEaseCloudMusic!'); // Animation starts
const loading = chalkAnimation.neon('Loading...'); // Animation starts

// setTimeout(() => {
//     welcome.stop(); // Animation stops
//     loading.stop();
// }, 5000);
var T = ['\u001B[1F\u001B[G\u001B[2K'+'1211',
'\u001B[1F\u001B[G\u001B[2K'+'1121',
'\u001B[1F\u001B[G\u001B[2K'+'1112',
'\u001B[1F\u001B[G\u001B[2K'+'1121',
'\u001B[1F\u001B[G\u001B[2K'+'1211',
'\u001B[1F\u001B[G\u001B[2K'+'2111',
'\u001B[1F\u001B[G\u001B[2K'+'1211'
]

// console.log('\u001B[1F\u001B[G\u001B[2K'+'1111');

// console.log('\u001B[G'+'2222');
// console.log('\u001B[2K'+'3333');
// console.log('\u001B[1F\u001B[G\u001B[2K'+'4444');
// console.log('\u001B[1F\u001B[G\u001B[2K'+'5555');
// console.log('\u001B[1F\u001B[G\u001B[2K'+'6666');
T.forEach(function(item,index){
  setTimeout(function(){
    console.log(item);
  },1000*index+100);
});
// ansi.cursor.show();

// setTimeout(function(){
//     console.log('1');
//   },1000);