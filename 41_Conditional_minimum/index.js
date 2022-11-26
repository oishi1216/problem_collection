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
  const data = lines[1].split(" ").map(Number);
  const arr = [];
  data.forEach(num => {
      if(num >= Number(lines[2])) {
          arr.push(num);
      }
  })
  arr.sort((a, b) => a - b);

  console.log(arr[0]);
});