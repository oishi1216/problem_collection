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
    const array = [];
    for(let i = 1; i <= lines[0]; i++) {
        array.push(lines[i].split(" "));
    }
    
    array.sort((a,b) => {
        return(a[0] - b[0]);
    });
    
    array.forEach(arr => {
        console.log(...arr);
    })
});