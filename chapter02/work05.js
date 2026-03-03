// setTimeoutを利用した待機用関数
console.log('1:処理の開始');

// 非同期処理を呼び出すアロー関数の定義
const sleep = (seconds, message) => {
    // 非同期処理の呼び出し
    setTimeout(() => console.log(message), seconds);
};

sleep(4000, '4:こんにちは');
sleep(5000, '5:こんばんは');
sleep(2000, '3:おはよう');

console.log('2:プログラムの最後');
