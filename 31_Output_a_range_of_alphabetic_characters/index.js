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
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const firstChar = lines[0].slice(0, 1);
    const lastChar = lines[0].slice(-1);
    const answerArr = chars.slice(chars.indexOf(firstChar), chars.indexOf(lastChar) + 1).split("");
    answerArr.map(answer => console.log(answer));
});