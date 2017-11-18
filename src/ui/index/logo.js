/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 14:15:56 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-18 19:08:13
 */
const { red,white,chalkRed,chalkWhite,black} = require('../../tool/colors');
var logo = `  
..@@@@@@@@@@@@@@@@@@@@@@@@@@@.. 
.@@@@@@@@@@@@@@@@.....@@@@@@@@. 
@@@@@@@@@@@...... .....@@@@@@@@ 
@@@@@@@@......@....@@@@@@@@@@@@ 
@@@@@@@....@@@.........@@@@@@@@ 
@@@@@@...@@@.............@@@@@@ 
@@@@@...@@@....@@...@@....@@@@@ 
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
        temText += `${i == 0 ? "" : "+"}chalk.hex(white)('${text[i]}')`;
      }
      if (text[i] == "@") {
        temText += `${i == 0 ? "" : "+"}'@'`;
      }
    }
    temText = "chalk.hex(red)(" + temText + ")";
    return temText;
  }
  
  function genLogo() {
    var logoTextArray = logo.split("\n");
    var logoTextArrayWrapChalk = [];
    logoTextArray.forEach(function(item, index) {
      logoTextArrayWrapChalk.push(addChalk(item));
    });
    return logoTextArrayWrapChalk.join("+'\\n'+");
  }

module.exports = genLogo();