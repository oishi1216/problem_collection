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
  const k = Number(lines[n + 1]);
  for(let i = 1; i <= n; i++) {
      const student = lines[i].split(" ");
      data.push(student);
  }

  data.forEach(val => {
      if(Number(val[1]) >= k) {
          console.log(val[0]);
      }
  })
});