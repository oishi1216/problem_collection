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
    const fs = require("fs");
    const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
    const lines = input.split("\n");
    
    const [n, m] = lines[0].split(" ").map(Number);
    
    const s = Array(m + 1).fill(0);
    const t = Array(m + 1).fill(0);
    
    const room = Array(n + 1).fill(0);
    
    for (let i = 1; i <= m; i++) {
      [s[i], t[i]] = lines[i].split(" ").map(Number);
      room[s[i]] = i;
    }
    
    const players = [];
    let p = 1;
    
    while (true) {
      players.push(p);
      if (room[t[p]] === 0 || room[t[p]] === 1) {
        break;
      }
      p = room[t[p]];
    }
    
    console.log(players.reverse().join(" "));
});