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
    let winer;
    lines.some(line => {
        let o = 0;
        let x = 0;
        for(let i = 0; i < line.length; i++) {
                if(line[i] === "O") {
                    o++;
                } else if(line[i] === "X") {
                    x++;
                }
        }
      
        if(o === 5) {
            winer = "O";
            return true;
        } else if(x === 5) {
            winer = "X";
            return true
        }
    })
    
    winer = winer === undefined ? "D" : winer;
    
    console.log(winer);
});