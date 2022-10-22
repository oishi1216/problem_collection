process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  
switch(lines[0]) {
  case 'baseball':
    console.log(9);
    break;
  case 'soccer':
    console.log(11);
    break;
  case 'rugby':
    console.log(15);
    break;
  case 'basketball':
    console.log(5);
    break;
  case 'volleyball':
    console.log(6);
    break;
  default:
    return
}
  
});