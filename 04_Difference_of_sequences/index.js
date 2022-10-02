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
    const dataA = lines[1].split(" ");
    const dataB = lines[2].split(" ");
    const answer = [];
    
    for(let i = 0; i < lines[0]; i++) {
        const calcu = dataB[i] - dataA[i];
        answer.push(calcu);
    }
    console.log(...answer);
});