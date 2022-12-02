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
  const data = [];
  const n = Number(lines[0]);
  const score = lines[n + 1].split(" ").map(Number);
  const k = score[0];
  const i = score[1];
  for(let i = 1; i <= n; i++) {
      const student = lines[i].split(" ");
      data.push(student);
  }

  data.forEach(val => {
      if(Number(val[1]) >= k && val[1] <= i) {
          console.log(val[0]);
      }
  })
});