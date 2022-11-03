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
    const purchases = []
    for(let i = 1; i <= lines[0]; i++) {
        const purchas = lines[i].split(" ");
        purchases.push(purchas);
    }
    
    let pantsCount = 0;
    let totalAmount = 0;
    purchases.forEach(data => {
        if(data[0] === 'pants') {
            pantsCount++;
        }
        
        totalAmount = totalAmount + Number(data[1]);
    })
    
    if(pantsCount > 0 && totalAmount >= 2000) {
        totalAmount = totalAmount - 500;
        console.log(totalAmount);
    } else {
        console.log(totalAmount);
    }
});