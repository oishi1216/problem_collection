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
  for(let i = 1; i <= lines[0]; i++) {
      data.push(lines[i].split(" "));
  }
  let obj = new Map();
  data.forEach(val => {
      if(obj.has(val[0])) {
        obj.set(val[0], Number(obj.get(val[0])) + Number(val[1]));
      } else {
        obj.set(val[0], Number(val[1]));
      }
  });
  const arr = [];
  obj.forEach((value, key) => {
      arr.push([key, value])
  })
  
  arr.sort((a, b) => b[1] - a[1]);
  
  arr.map(val => console.log(`${val[0]} ${val[1]}`))
});