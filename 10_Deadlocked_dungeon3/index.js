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
    const roomNum = Number(base[0]);
    
    const moveInfo = [];
    let playerNum = 1;
    for(let i = 1; i <= peopleNum; i++) {
        const info = lines[i].split(" ");
        moveInfo.push([Number(info[0]), Number(info[1]), playerNum]);
        playerNum++;
    }
    
    // 部屋の数分だけ要素のある配列を用意
    const roomInfoAfter = Array(roomNum).fill(0);
    const roomInfoBefor = Array(roomNum).fill(0);
    for(let i = 0;  i < peopleNum; i++) {
        // プレイヤー番号を移動前にいる部屋と移動後にいる部屋に格納
        // 例題でいう1番目のプレイヤーは移動前はroomInfoBefor[0]、移動後はroomInfoAfter[1]にいるのでそれぞれのindexに1を入れる
        roomInfoAfter[moveInfo[i][1] - 1] = moveInfo[i][2];
        roomInfoBefor[moveInfo[i][0] - 1] = moveInfo[i][2];
    }
    
    const players = [];
    let player = 1;
    let num = 0;
    while(true) {
        // 最初にプレイヤー1が移動後にいる部屋と一致したindex（つまり部屋番号）をさがす
        // 2週目以降は対象のプレイヤーが移動後にいる部屋のindexを探す
        if(roomInfoAfter[num] === player) {
            // 移動する必要があるプレイヤーなので「players」に追加する
            players.push(player);
            // 移動前の部屋の状態をチェックし、そこが「0」なら誰もいないので移動後に部屋に人がいて動けなかったプレイヤーが動けるようになる
            // 必ず1番目のプレイヤーは移動できるので、移動前の部屋にいたのが1番目のプレイヤーならであれば移動後も1番のプレイヤーになる
            if(roomInfoBefor[num] === 0 || roomInfoBefor[num] === 1) {
                // if文の条件を満たしていれば、移動すべきプレイヤーはplayersに入っているのでループを終了させる
                break;
            } else {
                // 次に検索するプレイヤーは移動前の部屋にいるプレイヤーなので（そのプレイヤーが移動しないと移動できないため）、
                // そのプレイヤー番号をplayerに代入する
                player = roomInfoBefor[num];
            }
        }
        // 移動後の部屋が過ぎてしまった部屋である可能性があるため1周の検索だけで完了しない可能性があるため、roomInfoAfter要素を超えた場合はnumをリセットする
        if(num >= roomInfoAfter.length) {
            num = 0;
        } else {
            num++;  
        }
    }
    
    console.log(players.reverse().join(" "));
});