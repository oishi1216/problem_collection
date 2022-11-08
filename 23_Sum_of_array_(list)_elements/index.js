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
    const datas = [1, 3, 5, 6, 3, 2, 5, 23, 2];
    const answer = datas.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
    );
  console.log(answer);
});