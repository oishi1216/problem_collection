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
    let num = 0;
    for(let i = 1; i <= lines[0]; i++) {
        if(Number(lines[i]) >= 5) {
            num = num + Number(lines[i]);
        }
    }
    console.log(num);
});