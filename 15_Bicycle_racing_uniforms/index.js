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
  switch(Number(lines[0])) {
        case 1:
          console.log('white');
          break;
        case 2:
          console.log('black');
          break;
        case 3:
          console.log('red');
          break;
        case 4:
          console.log('blue');
          break;
        case 5:
          console.log('yellow');
          break;
        case 6:
          console.log('green');
          break;
        case 7:
          console.log('orange');
          break;
        case 8:
          console.log('pink');
          break;
        case 9:
          console.log('purple');
          break;
  }
});