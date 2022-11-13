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
    const arr = [];
    for(let i = 1; i <= lines[0]; i++) {
        const data = lines[i].split(" ");
        arr.push(data);
    }
    arr.sort((a, b) => a[1] - b[1]);
    
    arr.map(a => console.log(a[0]));
});