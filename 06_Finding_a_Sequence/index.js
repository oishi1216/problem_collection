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
    const matrix = lines[0].split(" ");
    const rowX = Number(matrix[0]) + 1;
    const ArrayX = lines[rowX].split(" ");
    
    let answer = 0;
    
    for(let i = 1; i <= matrix[0]; i++) {
        let data = lines[i].split(" ");
        if(data.toString() === ArrayX.toString()) {
            answer = i;
        }
        
    }
    console.log(answer)
});