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
    let o = 0;
    let x = 0;
    let dot = 0;
    const arr = lines[0].split("");
    arr.map(val => {
        if(val === "O") {
            o++;
        } else if(val === "X") {
            x++;
        } else {
            dot++;
        }
    })
    
    if(o === 5) {
        console.log("O");
    } else if(x === 5) {
        console.log("X");
    } else {
        console.log("D")
    }
});