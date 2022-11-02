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
    const data = lines[0].split(" ");

    if(data[0] === '0' || data[1] === '0') {
        console.log('invalid');
    } else {
        const answer = Number(data[0]) * Number(data[1]);
        console.log(answer);
    }
});