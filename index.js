const chalk = require('chalk');
const log = console.log;

console.log(chalk.blue('Hello world!'));

const name = 'Sindre';
console.log(chalk.bgRgb(15, 100, 204).inverse('---------'));
console.log(chalk.bgRgb(15, 100, 204).inverse('    -     '));
console.log('------------ ');
console.log(chalk.bgRgb(15, 100, 204).inverse('---------'));
