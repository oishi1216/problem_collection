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
    const base = lines[0].split(" ");
    const peopleNum = Number(base[1]);
    const moveNum = Number(base[2]);
    
    const currentLocation = [];
    for(let i = 1; i <= peopleNum; i++) {
        currentLocation.push(Number(lines[i]));
    }
    
    const iNum = 1 + peopleNum;
    for(let i = iNum; i <= peopleNum + moveNum; i++) {
        const moveInfo = lines[i].split(" ");
        const peopleInfo = Number(moveInfo[0]);
        const roomInfo = Number(moveInfo[1]);
        
        if(currentLocation[peopleInfo - 1] === roomInfo || !currentLocation.includes(roomInfo)) {
            console.log("Yes");
        } else {
            console.log("No");
        }
    }
});