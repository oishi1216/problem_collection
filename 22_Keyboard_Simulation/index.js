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
    let capslock = false;
    let str = '';
    for(let i = 1; i <= lines[0]; i++) {
        const char = lines[i].split(" ");
        if(char[0] === 'capslock') {
            capslock = !capslock;
        } else if(!capslock) {
            char[0] === 'shift' ? str = str + char[1].toUpperCase() : str = str + char[0];  
        } else {
            str = str + char[0].toUpperCase();
        }
    }
    console.log(str);
});