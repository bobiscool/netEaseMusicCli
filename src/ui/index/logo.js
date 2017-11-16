/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-11-16 14:15:56 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-11-16 14:31:12
 */

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
        temText += `${i == 0 ? "" : "+"}chalk.white('${text[i]}')`;
      }
      if (text[i] == "@") {
        temText += `${i == 0 ? "" : "+"}'@'`;
      }
    }
    temText = "chalk.red(" + temText + ")";
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