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
    const data = lines[0].split(" ").map(Number);
    const newBeforeText = lines[1].slice(0, data[0] - 1);
    const newUpperText = lines[1].slice(data[0] - 1, data[1]).toUpperCase();
    const newAfterText = lines[1].slice(data[1] - lines[1].length);
    console.log(newBeforeText + newUpperText + newAfterText);
});