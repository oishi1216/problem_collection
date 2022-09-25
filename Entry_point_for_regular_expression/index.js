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
    const re = RegExp('[a-zA-Z]*')
    let result = lines.filter(line => {
        if(line.length > 0 && line.length <= 20) {
            return line.match(re);
        }else{
            return;
        }
    })
    const answer = `${result[0]};${result[1]}`;
    console.log(answer)
});