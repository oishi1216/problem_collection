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
    if(lines[0].charCodeAt(0) > lines[1].charCodeAt(0)) {
        console.log("false");
    } else if(lines[0].charCodeAt(0) <= lines[2].charCodeAt(0) && lines[2].charCodeAt(0) <= lines[1].charCodeAt(0) ) {
        console.log("true");
    } else {
        console.log("false");
    }
});