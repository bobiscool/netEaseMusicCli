var chalk = require("chalk");
var a = `
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
...@@@@@@@@@@@@@@@@@@@@@@@@@@..        
   `;

const title = `

 /$$   /$$             /$$     /$$$$$$$$                              
| $$$ | $$            | $$    | $$_____/                              
| $$$$| $$  /$$$$$$  /$$$$$$  | $$        /$$$$$$   /$$$$$$$  /$$$$$$ 
| $$ $$ $$ /$$__  $$|_  $$_/  | $$$$$    |____  $$ /$$_____/ /$$__  $$
| $$  $$$$| $$$$$$$$  | $$    | $$__/     /$$$$$$$|  $$$$$$ | $$$$$$$$
| $$\  $$$| $$_____/  | $$ /$$| $$       /$$__  $$ \____  $$| $$_____/
| $$ \  $$|  $$$$$$$  |  $$$$/| $$$$$$$$|  $$$$$$$ /$$$$$$$/|  $$$$$$$
|__/  \__/ \_______/   \___/  |________/ \_______/|_______/  \_______/
                                                                      
`;

function addChalk(text) {
  let temText = "";
  let textNotat = "";
  for (var i in text) {
    if (i != 0 && text[i] != "@") {
      temText = chalk.white(text[i]);
    }
  }
}

function genLogo() {
  var logoTextArray = a.split("\n");
//   let logoText = [];
//   logoText[0] = chalk.red(`
//     ..@@@@@@@@@@@@@@@@@@@@@@@@@...          
//     .,@@@@@@@@@@@@@@@@@@@@@@@@@@@^.  
//     `);
//   logoText[1] = chalk.red(`
//     ,@@@@@@@@@@@@@@@@${chalk.white("[..,[")}@@@@@@@@^  
//     `);
//   logoText[2] = chalk.red(`
//   ,@@@@@@@@@@@@@@@@${`[..,[`}@@@@@@@@^ 
//   `);

//   logoText[3] = chalk.red(`
//   ,@@@@@@@@@@@@@@@@${`[..,[`}@@@@@@@@^ 
//   `);
  logoText.forEach(function(item, index) {});

  console.log(logoTextArray);
}
// console.log(a)
// console.log(title)

genLogo();
