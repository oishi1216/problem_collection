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
  const first = lines[0].slice(0, 1);
  const last = lines[0].slice(-1);
  if(first.charCodeAt(0) < last.charCodeAt(0)) {
      console.log("true");
  } else {
      console.log("false");
  }
});