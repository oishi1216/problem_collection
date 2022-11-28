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
    const k = lines[lines.length - 1];
    for(let i = 1; i <= lines[0]; i++) {
        const num = lines[i].split(" ").map(Number);
        data.push(num);
    }
    let answer = 0;

    for(let i = 0; i < data.length; i++) {
        const distance = Math.abs(data[i][0] - data[lines[0] - 1][0]) +  Math.abs(data[i][1] - data[lines[0] - 1][1])
        if(distance <= k) {
            answer++;
        }
    }
    console.log(answer);
});