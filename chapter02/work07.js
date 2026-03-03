// 連続した非同期処理の呼び出し
console.log('1:処理の開始');

// 非同期処理を呼び出すアロー関数の定義
const sleep = (seconds, callback) => {
    // 非同期処理の呼び出し
    setTimeout(callback, seconds);
};

sleep(1000, () => {
    console.log('3:おはよう');
    sleep(1000, () => {
        console.log('4:こんにちは');
        sleep(1000, () => {
            console.log('5:こんばんは');
            sleep(1000, () => {
                console.log('6:おやすみ');
            });
        });
    });
});

console.log('2:プログラムの最後');
