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
    let num = 0;
    const arr = [];
    for(let i = 0; i < lines[1].length; i++) {
        const char = lines[1].substr(i, lines[0].length);
        if(char.length !== lines[0].length) {
            break;
        } else {
            arr.push(char);
        }
    }

    arr.map(str => {
        if(str === lines[0]) {
            num++;
        }
    })

    console.log(num);
});