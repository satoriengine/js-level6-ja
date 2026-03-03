// setTimeoutにコールバック関数をわたす
console.log('1:処理の開始');

// 非同期処理を呼び出すアロー関数の定義
const sleep = (seconds, callback) => {
    // 非同期処理の呼び出し
    setTimeout(callback, seconds);
};

sleep(2000, () => console.log('3:Good morning'));
sleep(6000, () => console.log('5:Good night'));
sleep(4000, () => console.log('4:Good afternoon'));

console.log('2:プログラムの最後');
