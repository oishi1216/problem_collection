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
  const arr = {};
  data.forEach((num, index) => {
      if(num % 2 !== 0) {
          arr["answer"] = index;
      }
  })

  console.log(arr.answer + 1)
});