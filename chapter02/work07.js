// 連続した非同期処理の呼び出し
console.log('1:処理の開始');

// 非同期処理を呼び出すアロー関数の定義
const sleep = (seconds, callback) => {
    // 非同期処理の呼び出し
    setTimeout(callback, seconds);
};
