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
    const lengths = lines[0].split(" ");
    const commands = [];
    const parameters = [];
    const num1 = 1 + Number(lengths[0]);
    const num2 = num1 + Number(lengths[2]);
    
    for(let i = 1; i <= lengths[0]; i++) {
        const command = lines[i].split(" ");
        commands.push(command);
    }
    
    for(let i = num1; i < num2; i++) {
        const parameter = lines[i].split(" ");
        parameters.push(parameter);
    }
    
    const num3 = Number(lengths[2]) - 1;
    const parameterDifferenceArray = [];
    
    for(let i = 0; i < num3; i++) {
        const parameterDifference = [];
    for(let j = 0; j < lengths[1]; j++) {
      const difference = parameters[i+1][j] - parameters[i][j];
      parameterDifference.push(difference);
    }
      parameterDifferenceArray.push(parameterDifference);
    }
    
    for(let i = 0; i < num3; i++) {
        for(let j = 0; j < lengths[0]; j++) {
            if(parameterDifferenceArray[i].toString() === commands[j].toString()) {
                console.log(j + 1);
            }
        }
    }
});