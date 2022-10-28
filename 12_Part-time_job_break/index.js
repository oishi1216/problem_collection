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
    if(lines[0] > 8) {
        console.log('60 min');   
    }
    else if(lines[0] > 6 && lines[0] <= 8) {
        console.log('45 min');
    }
    else {
        console.log('no break');
    }
});