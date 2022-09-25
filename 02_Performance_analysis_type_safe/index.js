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
    const data = lines[0].split(' ');
    let totalExperience = 0;
    // 小数点は計算結果が狂いやすいので10倍して整数に変換する
    const xp = data[1] * 10
    for(let i = 1; i <= data[0]; i ++) {
        totalExperience += Number(lines[i]) * 10;
    }

    let answer;
    if(totalExperience % xp === 0) {
        answer = totalExperience / xp;
    } else {
        answer = Math.ceil(totalExperience / xp) ;
    }
    console.log(answer);
});