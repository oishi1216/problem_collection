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
  const n = Number(lines[0]);
  const data = [];
  for(let i = 1; i <= n; i++) {
      const arr = lines[i].split(" ").map(Number);
      data.push(arr);
  }
  const x = lines[n + 1].split(" ").map(Number);
  const y = lines[n + 2].split(" ").map(Number);

  let answer = 0;
  data.forEach(val => {
      if(x[0] <= val[0] && val[0] <= x[1]) {
          if(y[0] <= val[1] && val[1] <= y[1]) {
            answer++;
          }
      }
  })
  console.log(answer);
});