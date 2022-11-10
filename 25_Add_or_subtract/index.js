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
    let answer = 0;
    for(let i = 1; i <= lines[0]; i++) {
        const num = lines[i].split(" ").map(Number);
        if(num[0] === num[1]) {
            answer = answer + num[0] * num[1];
        } else {
            answer = answer + num[0] + num[1];
        }
    }
    console.log(answer);
});