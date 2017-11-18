/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 14:15:56 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-18 18:51:04
 */
const chalkWhite = [255,255,255];
const chalkRed = [205,33,38];
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
        temText += `${i == 0 ? "" : "+"}chalk.rgb(chalkWhite[0],chalkWhite[1],chalkWhite[2])('${text[i]}')`;
      }
      if (text[i] == "@") {
        temText += `${i == 0 ? "" : "+"}'@'`;
      }
    }
    temText = "chalk.rgb(chalkRed[0],chalkRed[1],chalkRed[2])(" + temText + ")";
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