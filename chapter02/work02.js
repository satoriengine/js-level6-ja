// setIntervalの利用
console.log('1:処理の開始');

// カウント用変数
let count = 0;

// 非同期処理を繰り返し呼び出し
const timer = setInterval(function () {
    // 1秒後に実行
    console.log('3:こんにちは');
    // カウント用変数の加算
    count++;
    // カウント用変数が5以上なら
    if (count >= 5) {
        // 条件を満たしたら、処理を停止
        clearInterval(timer);
        console.log('4:処理の終了');
    }
}, 1000);

console.log('2:プログラムの最後');
