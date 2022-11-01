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
    const floor = lines[0].split(" ");
    const beforeFloor = Number(floor[0].replace(/[^0-9]/g, ''));
    const afterFloor = Number(floor[1].replace(/[^0-9]/g, ''));
    if(beforeFloor < afterFloor) {
        console.log('up');
    } else {
        console.log('down');
    }
});