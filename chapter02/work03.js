// カウントアップ
// カウント用変数
let count = 1;

// 1秒ごとに非同期処理を呼び出し
const timer = setInterval(function () {
    // 1秒後にカウント用変数を表示
    console.log(count);
    // カウント用変数の加算
    count++;
    // カウント用変数が6以上なら
    if (count >= 6) {
        // 条件を満たしたら、処理を停止
        clearInterval(timer);
    }
}, 1000);
